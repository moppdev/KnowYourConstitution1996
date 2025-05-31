

export default function MobileNav()
{
     // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const mobileNavClasses: string[] = ["hidden"];
    const mobileClassString: string = mobileNavClasses.join(" ");

    return (
        <nav className={mobileClassString}>
            
        </nav>
    )
}