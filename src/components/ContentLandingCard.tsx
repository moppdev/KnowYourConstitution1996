import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
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

    // Classes for the buttons used
    const buttonClasses: string[] = ["rounded-lg", "bg-(--border-link-button)", "p-2", "text-(--background-color)", "cursor-pointer", "hover:animate-button-hover", "mt-4", "md:mt-0"];
    const buttonClassString: string = buttonClasses.join(" ");

    return (
        /* Check for what type of content is given in the type variable*/
        (type === "chapter" && 
            <>
                <div className={cardClassString} id="chapter-card">
                    <p id="chapter-title">
                        {name} 

                        {/* Add a chevron to each chapter to show that they function as dropdowns (specific sections to the chapter would be made visible) except Preamble */}
                        {name !== "Preamble" && <FontAwesomeIcon id="dropper" className="ml-1" icon={faChevronDown} />}
                    </p>

                    <div id="view-full-chapter-button">
                        <NavLink to={link}>
                            <button className={buttonClassString}>
                                {name === "Preamble" ? "View the Preamble" : `View The Full Chapter`}
                            </button>
                        </NavLink> 
                    </div>
                </div>
            </>
        ) || 
        (
            type === "schedule" && 
            <div className={cardClassString}>
                AAAAAAAAAAA
            </div> 
        ) || 
        (
            type === "annexure" && 
            <div className={cardClassString}>
            ASDFFFFFFFFFFFF
            </div>
        ) || 
        (
            type === "amendment" && 
            <NavLink to={"/amendments"} >
                <div className={cardClassString} id="chapter-card">
                    View all amendments
                </div>
            </NavLink>
        )
    );
}

// Check the props received by the component
ContentLandingCard.PropTypes = {
    type: PropTypes.oneOf(["chapter", "schedule", "annexure", "amendment"]).isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};