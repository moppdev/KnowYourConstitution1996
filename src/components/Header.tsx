import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Returns the header of the page
export default function Header()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const headerClasses: string[] = ["top-0", "p-6", "w-screen", 
        "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)", "flex items-center justify-between", "sticky", "z-10"];
    const classString = headerClasses.join(" ");

    const brandClasses: string[] = ["text-2xl", "pb-2"];
    const brandClassString =brandClasses.join(" ");

    const barsClasses: string[] = ["text-3xl", "pb-2"];
    const barsClassString = barsClasses.join(" ");

    return (
        <header className={classString} id="header">
            <p className={brandClassString}><Link to="/">KYC1996</Link></p>

            <span className="md:hidden">
                <FontAwesomeIcon icon={faBars} className={barsClassString} />
            </span>

            <DesktopNav />

            <MobileNav/>
        </header>  
    );
}