import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

// This component deals with rendering a mobile nav menu
export default function MobileNav({handleNavMenu, isVisible}: {handleNavMenu: () => void, isVisible: boolean})
{
     // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // classes for the mobile nav
    const mobileNavClasses: string[] = ["bg-(--header-footer-nav)", "absolute", "left-0", "top-0", 
        "max-[400px]:w-2/3", "min-[401px]:w-1/2", "sm:w-35/100", "h-dvh", "z-10", 
        "border-r border-(--header-footer-nav-text)", "list-none", "md:hidden",
        isVisible ? "animate-slide-in-left" : "animate-slide-out-left"];
    const mobileClassString: string = mobileNavClasses.join(" ");

    // classes for when the links in the nav are active
    const activeClasses: string[] = ["text-(--header-footer-nav-text)", "opacity-80"];
    const activeClassString: string = activeClasses.join(" ");

    // classes for the overlay in the background
    const overlayClasses: string[] = ["bg-black", "left-0", "top-0", "w-screen", "h-dvh", "absolute", "opacity-40", "md:hidden", isVisible ? "animate-slide-in-left" : "animate-slide-out-left"];
    const overlayClassString: string = overlayClasses.join(" ");

    // classes for the list items in the mobile nav
    const listItemClasses: string[] = ["border-b", "border-(--header-footer-nav-text)", "mx-3", "pt-4"];
    const listItemString: string = listItemClasses.join(" "); 

    // classes for the icons in the list items in the mobile nav
    const iconListClasses: string[] = [  "text-l", "float-right", "text-(--header-footer-nav-text)", "mt-[6px]", "mr-[3px]"];
    const iconListClassString: string = iconListClasses.join(" ");

    // classes for the top "header" of the mobile nav
    const menuTopClasses: string[] = ["text-xl flex justify-between border-b p-4"];
    const menuTopClassString: string = menuTopClasses.join(" ");

    // classes for the close icon in the mobile nav
    const closeIconClasses: string[] = ["text-2xl font-bold text-(--header-footer-nav-text) mt-[2px]"];
    const closeIconClassString: string = closeIconClasses.join(" ");


    // Return the mobile nav menu + overlay
    return (
        <>
            <div id="overlay" className={overlayClassString} onPointerDown={handleNavMenu} ></div>

            <nav id="mobile-nav" className={`mobile-nav` + " " + mobileClassString}>
                <div className={menuTopClassString}>
                    <NavLink onPointerDown={handleNavMenu} to="/" className="text-(--header-footer-nav-text)">
                            KYC1996
                    </NavLink>

                    <FontAwesomeIcon icon={faClose} onPointerDown={handleNavMenu} className={closeIconClassString} />
                </div>

                <ul className="text-xl">
                        <NavLink to="/" className={({isActive}) => isActive ? activeClassString : ""}>
                            <li className={listItemString}>
                                Home
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                        <NavLink to="/history" className={({isActive}) => isActive ? activeClassString : ""}>
                            <li className={listItemString}>
                                History
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                        <NavLink to="/contents" className={({isActive}) => isActive ? activeClassString : ""}>
                            <li className={listItemString}>
                                Contents
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>    
                        </NavLink>
                        <NavLink to="/contribute" className={({isActive}) => isActive ? activeClassString : ""}>
                            <li className={listItemString}>
                                Contributions
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>          
                        <NavLink to="/api-docs" className={({isActive}) => isActive ? activeClassString : ""}>
                            <li className={listItemString}>
                                API
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                </ul>
            </nav>
        </>
    )
}