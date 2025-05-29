import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// returns the footer of the page
export function Footer()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string
    // More readable
    const footerClasses: string[] = ["bottom-0", "p-5", "absolute", 
        "w-screen", "bg-(--header-footer-nav)", "text-center", "font-[Kanit]", 
        "text-(--background-color)"];
    const classString = footerClasses.join(" ");

    const githubIconClasses: string[] = ["text-4xl", "hover:bg-sky-700", "rounded-full"];
    const githubClassString = githubIconClasses.join(" ");

    return (
        <footer className={classString}>
            <a href="https://github.com/moppdev/KnowYourConstitution1996" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={githubClassString}/>
            </a>

            <p>
                Made with ❤️ by Marco Oppel and other, awesome contributors
            </p>
        </footer>
    )
}