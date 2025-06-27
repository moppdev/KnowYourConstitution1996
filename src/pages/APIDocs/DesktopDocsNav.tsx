import { NavLink } from "react-router";

// This component allows the user to navigate through the API documentation on tablet screens and higher widths
export default function DesktopDocsNav()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // classes for the nav itself
    const navClasses: string[] = ["hidden", "md:block", "h-full", "bg-(--header-footer-nav-text)", "border-r-2 border-(--header-footer-nav)", "text-lg"];
    const navClassString: string = navClasses.join(" ");

    // classes for each list item in nav
    const navItemClasses: string[] = ["border-b-1 border-(--text)", "py-4"];
    const navItemClassString: string = navItemClasses.join(" ");
    
    return (
        <nav className={navClassString}>
            <h2 className="py-4 text-center">ZAConstitution1996 API Docs</h2>
            <ul className="list-none p-4">
                <li className={`border-y-1 border-(--text) py-4`}>
                    <NavLink to={`/api-docs`} className={`block w-full`}>
                        Home
                    </NavLink>
                </li>
                <li className={navItemClassString}>Main (Chapters 1 - 14)</li>
                <li className={navItemClassString}>
                    <NavLink to={`/api-docs/schedules`} className={`block w-full`}>
                        Schedules
                    </NavLink>
                </li>
                <li className={navItemClassString}>
                    <NavLink to={`/api-docs/annexures`} className={`block w-full`}>
                        Annexures
                    </NavLink>
                </li>
                <li className={navItemClassString}>
                    <NavLink to={`/api-docs/amendments`} className={`block w-full`}>
                        Amendments
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}