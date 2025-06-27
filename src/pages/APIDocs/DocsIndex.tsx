import PageTitle from "../../components/PageTitle";

// First page user sees when going to the API docs
export default function DocsIndex()
{
    // Change the title in the browser tab
    document.title = "KYC1996 | API Documentation";

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const paragraphClasses: string[] = ["mx-5", "mb-6", "md:ml-14"];
    const paragraphClassString: string = paragraphClasses.join(" ");

    return (
        <div id="apidocs-index" className="w-full pb-30 sm:pb-65 md:pb-95">
            <PageTitle title="API Documentation" />

            <p className={paragraphClassString}>
                Welcome to the documentation for the <a className="underline text-(--border-link-button)" href="https://github.com/moppdev/ZAConstitution1996" target="_blank">ZAConstitution1996</a> API!
            </p>

            <p className={paragraphClassString}>
                ZAConstitution1996 is an ASP.NET Web API project that envisions providing public, on-demand, easy access to the contents of South Africa's 1996 Constitution that is currently in force. 
                The goal of this project is to make the Constitution easily accessible to developers to create solutions that make it easier for the public to access and understand its contents.
            </p>

            <p className={paragraphClassString}>
                This API is completely open and free to use. The API only returns JSON data.
                The API's base link is available<a className="underline text-(--border-link-button)" target="_blank" href="https://constitution1996.runasp.net"> [here.]</a>
            </p>

            <div className={paragraphClassString}>
                This documentation's navigation (should be either on the left of the page or as a modal after you click the bright green button on screen) links are sorted by the main contents in the API:
                <ul className="list-disc pl-8 pt-3">
                    <li>
                        <strong>Main</strong>
                        <p>Contains the routes that return content from Chapters 1 to 14 of the Constitution.</p>
                    </li>
                    <li>
                        <strong>Schedules</strong>
                        <p>Contains the routes that return content from the Schedules 1 to 7 of the Constitution.</p>
                    </li>
                    <li>
                        <strong>Annexures</strong> 
                        <p>Contains the routes that return content from Annexures A to D of the Constitution.</p>
                    </li>
                    <li>
                        <strong>Amendments</strong>
                        <p>Contains a single route that returns content about all Amendments made to the Constitution.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}