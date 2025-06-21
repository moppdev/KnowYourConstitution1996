import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import type { SectionsPerChapter } from "../types/Main";
import { getSectionsByChapter } from "../api/MainAPI";

// This component is used to render a card for each type of content (e.g every chapter, every annexure, every schedule) on the content landing page
export default function ContentLandingCard({type, name, link}: {type: "chapter" | "schedule" | "annexure" | "amendment", name: string, link: string})
{
    const [dropped, setDropped] = useState(false);
    const [sections, setSections] = useState<SectionsPerChapter[] | null>(null);

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the card itself
    const cardClasses: string[] = ["border-2", 
        "md:mr-10", "border-(--border-link-button)", 
        "rounded-md", "p-3" ,"lg:mt-4", "lg:mr-12", "mr-5", "mt-3", "cursor-pointer", "select-none"];
    const cardClassString: string = cardClasses.join(" ");

    // classes for cards that don't have dropdown functionality
    const noDropCardClasses: string[] = ["md:flex", "md:justify-between", "md:items-center", "border-2", 
    "md:mr-10", "border-(--border-link-button)", 
    "rounded-md", "p-3" ,"lg:mt-4", "lg:mr-12", "mr-5", "mt-3"];
    const noDropClassString: string = noDropCardClasses.join(" ");

    // Classes for the buttons used
    const buttonClasses: string[] = ["rounded-lg", "bg-(--border-link-button)", "p-2", "text-(--background-color)", "cursor-pointer", "hover:animate-button-hover", "mt-4", "md:mt-0"];
    const buttonClassString: string = buttonClasses.join(" ");

    // classes for each chapter's dropdown part
    const contentClasses: string[] = ["drop-sections-card mt-2", dropped ? "show-sections-card": ""];
    const contentClassString: string = contentClasses.join(" ");

    // get the chapter number from the name
    let chapterID: number = 0;
    if (type === "chapter")
    {
        // splits the given name by ":" so only e.g. "Chapter 12" is returned
        const splittedName = name.split(":")[0];
        chapterID = parseInt(splittedName.substring(splittedName.indexOf(" ") + 1));
    }
    
    useEffect(() => {
        async function fetchSections()
        {
            const data: SectionsPerChapter[] | null = await getSectionsByChapter(chapterID);
            setSections(data);
        }

        fetchSections();
    }, [name, type, chapterID])

    return (
        /* Check for what type of content is given in the type variable*/
        (type === "chapter" && 
            <>
                {name !== "Preamble" && 
                    <div className={cardClassString} onClick={() => {setDropped(!dropped)}}>
                        <div className="md:flex md:justify-between md:items-center">
                            <h3>
                                      {name} {/* Add a chevron to each chapter to show that they function as dropdowns (specific sections of the chapter would be made visible) except Preamble */}
                                    <FontAwesomeIcon id="dropper" className="ml-1" icon={dropped ? faChevronUp : faChevronDown} />    
                            </h3>

                            <div>
                                <NavLink to={link}>
                                    <button className={buttonClassString}>
                                        {`View ${name.substring(0, name.indexOf(":"))}`}
                                    </button>
                                </NavLink> 
                            </div>
                        </div>
                    
                        <div className={contentClassString} id={`chapter-${chapterID}-sections`}>
                            {sections && (
                                sections.map((section) => (
                                    <NavLink key={`chapter-${chapterID}-section-${section.sectionID}`} to={`/chapter/${chapterID}#section-${section.sectionID}`}>
                                        <div className="border-y-1 border-(--border-link-button) p-4">{`Section ${section.sectionID === 23065 ? "230A" : section.sectionID}: ${section.sectionTitle}`}</div>
                                    </NavLink>
                                ))
                            )}
                        </div>
                    </div>
                }

                {name === "Preamble" && 
                    <div className={noDropClassString}>
                        <h3>
                            {name} 
                        </h3>

                        <div>
                            <NavLink to={link}>
                                <button className={buttonClassString}>
                                    View the Preamble
                                </button>
                            </NavLink> 
                        </div>
                    </div>
                }
            </>
        ) || 
        (
            type === "schedule" && 
            <>
                <div className={noDropClassString}>
                    <h3>
                        {name}
                    </h3>

                    <div>
                        <NavLink to={link}>
                            <button className={buttonClassString}>
                                {`View ${name.substring(0, name.indexOf(":"))}`}
                            </button>
                        </NavLink> 
                    </div>
                </div>
            </>
        ) || 
        (
            type === "annexure" && 
            <>
                <div className={noDropClassString}>
                    <h3>
                        {name}
                    </h3>

                    <div>
                        <NavLink to={link}>
                            <button className={buttonClassString}>
                                {`View ${name.substring(0, name.indexOf(":"))}`}
                            </button>
                        </NavLink> 
                    </div>
                </div>
            </>
        ) || 
        (
            type === "amendment" && 
                <div className={noDropClassString} id="chapter-card">
                    <h3>
                        All amendments
                    </h3>

                    <NavLink to={"/amendments"} >
                            <button className={buttonClassString}>
                                {`View all amendments`}
                            </button>
                    </NavLink>
                </div>

                
        )
    );
}