import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContributingCard({ cardType }: {cardType: "website" | "api"}) 
{
    // variables to hold the text and link for the card
    let text: string = "";
    let link: string = "";

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    let cardClasses: string[] = [];

    // cardType is used to determine which card to show
    // If the cardType is "website", show the website card, if it is "api", show the API card
    if (cardType === "website") {
        text = "Contribute to the \nwebsite";
        cardClasses = ["bg-(--header-footer-nav-text)", "text-(--text)", "rounded-md", "md:text-xl", "grid", "grid-cols-1", "justify-items-center", "gap-5", "p-8", "md:p-14",
            "whitespace-pre-line", "text-center", "border-3", "border-(--header-footer-nav)"];
        link = "https://github.com/moppdev/KnowYourConstitution1996";
    }
    else if (cardType === "api") {
        text = "Contribute to the \n API";
        cardClasses = ["bg-(--header-footer-nav)", "text-(--background-color)", "md:text-xl", "rounded-md", "grid", "grid-cols-1", "justify-items-center", "gap-5", "p-8", "md:p-14", 
            "whitespace-pre-line", "text-center", "border-3", "border-(--header-footer-nav-text)"];
        link = "https://github.com/moppdev/ZAConstitution1996";
    };

    const cardClassString: string = cardClasses.join(" ");

    // Return the card as a link that opens in a new tab
    return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={cardClassString}>
                        <FontAwesomeIcon icon={faGithub} className="text-6xl"/>
                        
                        {text}
                </div>
            </a>
    );
}