import { useState } from "react";
import { NavLink } from "react-router";

export default function MobileNav()
{
     // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const mobileNavClasses: string[] = ["bg-(--header-footer-nav)", "absolute", "left-0", "top-0", 
        "w-1/2", "h-dvh", "z-10", "border", "list-none", "md:hidden"];
    const mobileClassString: string = mobileNavClasses.join(" ");

    const activeClasses: string[] = ["text-(--background-color)", "opacity-80"];
    const activeClassString: string = activeClasses.join(" ");

    const overlayClasses: string[] = ["bg-black", "left-0", "top-0", "w-screen", "h-dvh", "fixed", "opacity-40", "md:hidden"];
    const overlayClassString: string = overlayClasses.join(" ");

    // let animationClasses: string[] = ["animate-fade-right animate-once animate-ease-in-out"];
    // let animationClassString = animationClasses.join(" ");

     // state variable that keeps track of the fact that the menu is visible or not
    const [visible, setVisible] = useState(false);

    function handleNavMenu()
    {
        // if (visible) 
        //     {animationClasses = [""]; animationClassString = animationClasses.join(" ");}
        // else
        //     {animationClasses = ["animate-fade-right animate-once animate-ease-in-out"]; animationClassString = animationClasses.join(" ");}

        setVisible(!visible);
    }

    return (
        <>
            <div id="overlay" className={overlayClassString + " " + animationClassString} onPointerDown={handleNavMenu} ></div>

            <nav id="mobile-nav" className={mobileClassString + " " + animationClassString}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? activeClassString : ""}>
                        Nothing
                    </NavLink>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </nav>
        </>
    )
}