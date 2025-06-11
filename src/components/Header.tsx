import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";

// Returns the header of the page
export default function Header()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // Classes for the header
    const headerClasses: string[] = ["top-0", "p-6", "w-screen", "max-[340px]:w-lvw",
        "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)", "flex items-center justify-between", "sticky", "z-10"];
    const headerClassString = headerClasses.join(" ");

    // Classes for the "logo" on the left side of the header
    const brandClasses: string[] = ["text-2xl", "pb-2"];
    const brandClassString =brandClasses.join(" ");

    // Classes for the "hamburger button" to open the mobile nav
    const barsClasses: string[] = ["text-3xl", "pb-2"];
    const barsClassString = barsClasses.join(" ");

    // state variables to determine the visibility and render state of the mobile nav
    const[visible, setVisible] = useState(false);
    const [shouldRenderNav, setShouldRenderNav] = useState(false);

    // function that handles the toggling of the mobile nav
    function handleNavMenu()
    {
        // When the "hamburger button" is clicked and...

        // if it's not visible
        if (!visible) {
            // let the component render, block scrolling of the background, make the menu visible and run the animation
            setShouldRenderNav(true);
            setVisible(true);
        } else {
            // if it's visible
            // remove the component after 500ms, during removal reenable scrolling of the background, make the menu invisible and run the animation
            setVisible(false);
            const timeout = setTimeout(() => setShouldRenderNav(false), 500);
            clearTimeout(timeout);
        }
    }

    // render the headers and navs
    return (
        <header className={headerClassString} id="header">
            <p className={brandClassString}><Link to="/">KYC1996</Link></p>

            <span className="md:hidden" onPointerDown={handleNavMenu}>
                <FontAwesomeIcon icon={faBars} className={barsClassString} />
            </span>

            <DesktopNav />

            {shouldRenderNav && (
                <MobileNav isVisible={visible} handleNavMenu={handleNavMenu} />
            )}
        </header>  
    );
}