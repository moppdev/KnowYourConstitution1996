// This component acts as the container of the main content on the page
export default function Container({children})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const containerClasses: string[] = ["bg-sky-300", "lg:mx-[5em]", "xl:mx-[11em]", "2xl:mx-[17em]", "lg:border-x border-solid border-(--text)", "bg-(--background-color)"];
    const containerClassString = containerClasses.join(" ");

    return (
        <main id="container" className={containerClassString}>
            {children}
        </main>
    )
}