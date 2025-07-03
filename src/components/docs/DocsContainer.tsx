// This component acts as the container of the main content on the page for the API docs
export default function DocsContainer({children})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const containerClasses: string[] = ["md:grid md:grid-cols-[250px_1fr]"]; //"pb-15", "pt-5"
    const containerClassString = containerClasses.join(" ");

    return (
        <main id="apidocs-container" className={containerClassString}>
            {children}

            {/* TODO: Add loading part here and a prop that takes a loading state function */}
        </main>
    )
}