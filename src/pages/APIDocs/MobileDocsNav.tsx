import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

// This component deals with rendering a mobile nav menu
export default function MobileDocsNav({handleNavMenu, isVisible}: {handleNavMenu: () => void, isVisible: boolean})
{
     // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // classes for the mobile nav
    const mobileNavClasses: string[] = ["bg-(--header-footer-nav-text)", "fixed", "left-0", "top-0", 
        "max-[400px]:w-2/3", "min-[401px]:w-1/2", "sm:w-35/100", "h-dvh", "z-10", 
        "border-r border-(--header-footer-nav)", "list-none", "md:hidden",
        isVisible ? "animate-slide-in-left" : "animate-slide-out-left"];
    const mobileClassString: string = mobileNavClasses.join(" ");

    // classes for when the links in the nav are active
    const activeClasses: string[] = ["text-(--header-footer-nav)", "opacity-80"];
    const activeClassString: string = activeClasses.join(" ");

    // classes for the overlay in the background
    const overlayClasses: string[] = ["bg-black", "left-0", "top-0", "z-10", "w-screen", "h-dvh", "fixed", "opacity-40", "md:hidden", isVisible ? "animate-slide-in-left" : "animate-slide-out-left"];
    const overlayClassString: string = overlayClasses.join(" ");

    // classes for the list items in the mobile nav
    const listItemClasses: string[] = ["border-b", "border-(--header-footer-nav)", "mx-3", "pt-4"];
    const listItemString: string = listItemClasses.join(" "); 

    // classes for the icons in the list items in the mobile nav
    const iconListClasses: string[] = [  "text-l", "float-right", "text-(--header-footer-nav)", "mt-[6px]", "mr-[3px]"];
    const iconListClassString: string = iconListClasses.join(" ");

    // classes for the top "header" of the mobile nav
    const menuTopClasses: string[] = ["text-xl flex justify-between border-b p-4"];
    const menuTopClassString: string = menuTopClasses.join(" ");

    // classes for the close icon in the mobile nav
    const closeIconClasses: string[] = ["text-2xl font-bold mt-[2px]"];
    const closeIconClassString: string = closeIconClasses.join(" ");


    // Return the mobile nav menu + overlay
    return (
        <>
            <div id="overlay" className={overlayClassString} onPointerDown={handleNavMenu} ></div>

            <nav id="mobile-nav" className={`mobile-docs-nav` + " " + mobileClassString}>
                <div className={menuTopClassString}>
                    <NavLink onPointerDown={handleNavMenu} to="/api-docs">
                            ZAConstitution1996 API Docs
                    </NavLink>

                    <FontAwesomeIcon icon={faClose} onPointerDown={handleNavMenu} className={closeIconClassString} />
                </div>

                <ul className="text-xl">
                        <NavLink to="/api-docs" onPointerDown={handleNavMenu} className={({isActive}) => isActive ?  activeClassString  + "inline-block w-full" : ""}>
                                <li className={listItemString}>
                                    Home

                                    <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                                </li>
                        </NavLink>
                        <NavLink to="/memes" onPointerDown={handleNavMenu} className={({isActive}) => isActive ? activeClassString + "inline-block w-full" : ""}>
                            <li className={listItemString}>
                                Main (Chapters 1 - 14)
                                
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                        <NavLink to="/api-docs/schedules" onPointerDown={handleNavMenu} className={({isActive}) => isActive ? activeClassString + "inline-block w-full" : ""}>
                            <li className={listItemString}>
                                Schedules
                                
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                        <NavLink to="/api-docs/annexures" onPointerDown={handleNavMenu} className={({isActive}) => isActive ? activeClassString + "inline-block w-full" : ""}>
                            <li className={listItemString}>
                                Annexures
                                
                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                        <NavLink to={`/api-docs/amendments`} onPointerDown={handleNavMenu} className={({isActive}) => isActive ? activeClassString + "inline-block w-full" : ""}>
                            <li className={listItemString}>
                                Amendments

                                <FontAwesomeIcon icon={faArrowRight} className={iconListClassString} />
                            </li>
                        </NavLink>
                </ul>
            </nav>
        </>
    )
}