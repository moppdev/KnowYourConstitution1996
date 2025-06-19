import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

// Add 
export default function BackToContents()
{
    const buttonClasses: string[] = ["text-l", "lg:ml-13", "lg:mt-11", "md:ml-13", "mt-8", "ml-6", "p-3", "rounded-md", 
        "border-2", "border-(--header-footer-nav)", "text-(--header-footer-nav)",
        ""];
    const buttonClassString: string = buttonClasses.join(" ");

    return (
        <button className={buttonClassString}>
            <NavLink to={`/contents`} className={"flex gap-3"}>
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} className="text-xl mt-[0.15em]"/>
                </span> 
                <span>Back To Contents</span>
            </NavLink>
        </button>
    )
}