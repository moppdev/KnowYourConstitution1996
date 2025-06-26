import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This Floating Action Button component allows the user to access a nav menu to navigate the API docs on mobile
export default function NavFAB({onClick}: {onClick: () => void})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const fabClasses: string[] = ["bg-(--fab-button)", "rounded-full", "md:hidden", "flex", 
    "justify-center", "p-6", "w-16", "fixed", "bottom-7 right-4", "sm:bottom-13"]; //TODO: 470px > animation fader
    const fabClassString: string = fabClasses.join(" ");

    return (
        <div className={fabClassString} aria-label="fab-api-nav" onClick={() => onClick()} role="button">
            <FontAwesomeIcon icon={faFile} className="text-(--background-color) text-lg"/>
        </div>
    )
}