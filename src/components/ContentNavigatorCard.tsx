import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

// This component displays a card that would be at the bottom of the *Contents.tsx pages to navigate between Chapters, etc.
export default function ContentNavigatorCard({contentType, id, direction}: {contentType: "chapter" | "schedule" | "annexure" | "preamble", id: string, direction: "l" | "r"})
{
     // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for the card
    const linkClasses: string[] = ["text-l", "lg:ml-13", "lg:mt-11", "md:ml-13", "my-8", "ml-6", "p-7", "sm:px-15", "rounded-md", 
        "border-2", "border-(--header-footer-nav)", "text-(--header-footer-nav)", "min-[380px]:mr-15", "mr-6", "hover:bg-(--header-footer-nav)/20 hover:border-(--border-link-button)"];
    const linkClassString: string = linkClasses.join(" ");

    const buttonClasses: string[] = ["flex", "gap-10", "cursor-pointer", direction == "r" ?`max-[640px]:content-end-safe` : ""];
    const buttonClassString: string = buttonClasses.join(" ");

    // link to navigate to
    const link: string = (id != "-1" ? `/${contentType}/${id}` : "/preamble");

    // label for where the card will navigate to
    const title: string = contentType[0].toUpperCase() + contentType.substring(1) + ` ${id.toUpperCase()}`;

    return (
        // switched the classes from how they're usually used, to achieve that the entire card acts as a link
        <NavLink to={link} className={linkClassString}>    
                <button className={buttonClassString}>
                {
                    (direction == "l") ? <FontAwesomeIcon icon={faArrowLeft} className="text-3xl mt-[0.3em]"/> : ""
                }

                <div className={`text-left`}>
                    <p>{(direction === "l") ?  "Previous" : "Next"}</p>
                    <p>{(contentType === "preamble") ? "Preamble" : title}</p>
                </div>

                {
                    (direction == "r") ? <FontAwesomeIcon icon={faArrowRight} className="text-3xl mt-[0.3em]"/> : ""
                }
            </button>
        </NavLink>
    )
}