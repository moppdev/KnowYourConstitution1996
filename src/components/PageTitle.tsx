// Component that returns the h1 title for a page
export default function PageTitle({title}: {title: string})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // Classes for the title
    const titleClasses: string[] = ["text-2xl", "text-center", "md:text-left", "py-10", "md:pl-14 text-3xl"];
    const titleClassString: string = titleClasses.join(" ");

    // return the component
    return (
        <h1 className={titleClassString}>{title}</h1>
    )
}