import PageTitle from "../../components/PageTitle";
import CodeSnippet from "./CodeSnippet";
import DocsAPICallTabs from "./DocsAPICallTabs";

// this page displays all the routes used in the Amendments controller, to retrieve info about all Amendments
export default function DocsAmendments()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const paragraphClasses: string[] = ["mx-5", "mb-6", "md:mx-14"];
    const paragraphClassString: string = paragraphClasses.join(" ");

    const apiRoute = '/api/v1/amendments'; // api route

    return (
        <div id="apidocs-amendments" className="pb-30 sm:pb-65 md:pb-95">
            <PageTitle title="Amendments" />
            
            <p className={paragraphClassString}>
                The <strong>Amendments</strong> controller only has <strong>one route: </strong>
            </p>
            
            <CodeSnippet lang="http" lines={apiRoute} />
           
            <p className={paragraphClassString}>
                <strong>The route returns:</strong> an array of objects, each containing the name of the amendment, the date it came into effect and references to the amendment.
            </p>

            <p className={paragraphClassString}>
                The following type is returned:
            </p>
            <CodeSnippet lang="typescript" lines={`[
    {
        "amendmentTitle": string,
        "dateOfEffect": string,
        "reference": string
    }
]`} />

            <p className={paragraphClassString}>
                Here's an example of how to call the route (code is horizontally scrollable):
            </p>
            
            <DocsAPICallTabs link={apiRoute} />
        </div>
    )
}