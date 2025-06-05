import { NavLink } from "react-router";

// This component acts as the nav but for higher tablet and desktop screen widths
export default function DesktopNav()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    
    // classes for the list in the desktop nav
    const navClasses: string[] = ["mb-2", "justify-between", "flex"];
    const navClassString: string = navClasses.join(" ");

    // classes for the desktop nav
    const desktopNavClasses: string[] = ["hidden", "md:block", "list-none"];
    const desktopNavString: string = desktopNavClasses.join(" ");
    
    // classes for the list items in the desktop nav
    const listItemClasses: string[] = ["lg:pr-12", "pr-8", "font-bold", "font-[Bitter]"];
    const listItemString: string = listItemClasses.join(" ");

    // classes for the last link in the list
    const lastLinkClasses: string[] = ["lg:pr-10", "font-bold", "font-[Bitter]"];
    const lastLinkString: string = lastLinkClasses.join(" ");

    // classes for the active link in the desktop nav
    const activeClasses: string[] = ["text-(--background-color)", "opacity-80"];
    const activeClassString: string = activeClasses.join(" ");

    // return the desktop nav
    return (
        <nav id="desktop-nav" className={desktopNavString}>
            <ul className={navClassString}>
                <li className={listItemString}>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClassString : ""}>
                        Home
                    </NavLink>
                </li>
                <li className={listItemString}>
                    <NavLink to="/history" className={({ isActive }) => isActive ? activeClassString : ""}>
                        History
                    </NavLink>
                </li>
                <li className={listItemString}>
                    <NavLink to="/contents" className={({ isActive }) => isActive ? activeClassString : ""}>
                        Contents
                    </NavLink>
                </li>
                <li className={listItemString}>
                    <NavLink to="/contribute" className={({ isActive }) => isActive ? activeClassString : ""}>
                        Contributions
                    </NavLink>
                </li>            
                <li className={lastLinkString}>
                    <NavLink to="/api-docs" className={({ isActive }) => isActive ? activeClassString : ""}>
                        API
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}