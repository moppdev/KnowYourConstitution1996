import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Returns the header of the page
export function Header()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string
    // More readable
    const headerClasses: string[] = ["top-0", "p-10", "w-screen", "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)"];
    const classString = headerClasses.join(" ");

    // const desktopNavClasses: string[] = [];
    // const desktopClassString = desktopNavClasses.join(" ");

    // const mobileNavClasses: string[] = [];
    // const mobileClassString = mobileNavClasses.join(" ");

    const brandClasses: string[] = ["float-left", "text-2xl", "pb-2"];
    const brandClassString =brandClasses.join(" ");

    const barsClasses: string[] = ["float-right", "text-3xl", "pb-2"];
    const barsClassString = barsClasses.join(" ");

    return (
        <header className={classString}>
            <p className={brandClassString}>KYC1996</p>

            <FontAwesomeIcon icon={faBars} className={barsClassString}/>
        </header>  
    );
}