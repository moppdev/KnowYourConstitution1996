import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

// This component is used to render a card for each type of content (e.g every chapter, every annexure, every schedule) on the content landing page
export default function ContentLandingCard({type, name, link}: {type: "chapter" | "schedule" | "annexure" | "amendment", name: string, link: string})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the card itself
    const cardClasses: string[] = ["md:flex", "md:justify-between", "md:items-center", "border-2", 
        "md:mr-10", "border-(--border-link-button)", 
        "rounded-md", "p-3" ,"lg:mt-4", "lg:mr-12", "mr-5", "mt-3", "cursor-pointer"];
    const cardClassString: string = cardClasses.join(" ");

    // classes for cards that don't have dropdown functionality
    const noDropCardClasses: string[] = ["md:flex", "md:justify-between", "md:items-center", "border-2", 
    "md:mr-10", "border-(--border-link-button)", 
    "rounded-md", "p-3" ,"lg:mt-4", "lg:mr-12", "mr-5", "mt-3"];
    const noDropClassString: string = noDropCardClasses.join(" ");

    // Classes for the buttons used
    const buttonClasses: string[] = ["rounded-lg", "bg-(--border-link-button)", "p-2", "text-(--background-color)", "cursor-pointer", "hover:animate-button-hover", "mt-4", "md:mt-0"];
    const buttonClassString: string = buttonClasses.join(" ");

    return (
        /* Check for what type of content is given in the type variable*/
        (type === "chapter" && 
            <>
                {name !== "Preamble" && 
                    <div className={cardClassString}>
                        <p>
                            {name} 

                            {/* Add a chevron to each chapter to show that they function as dropdowns (specific sections of the chapter would be made visible) except Preamble */}
                            <FontAwesomeIcon id="dropper" className="ml-1" icon={faChevronDown} />
                        </p>

                        <div>
                            <NavLink to={link}>
                                <button className={buttonClassString}>
                                    {`View ${name.substring(0, name.indexOf(":"))}`}
                                </button>
                            </NavLink> 
                        </div>
                    </div>
                }

                {name === "Preamble" && 
                    <div className={noDropClassString}>
                        <p>
                            {name} 
                        </p>

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
                    <p>
                        {name}
                    </p>

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
                    <p>
                        {name}
                    </p>

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
                    All amendments

                    <NavLink to={"/amendments"} >
                            <button className={buttonClassString}>
                                {`View all amendments`}
                            </button>
                    </NavLink>
                </div>

                
        )
    );
}