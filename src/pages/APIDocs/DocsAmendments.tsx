import SEO from "../../components/SEO";
import PageTitle from "../../components/PageTitle";
import CodeSnippet from "../../components/docs/CodeSnippet";
import DocsAPICallTabs from "../../components/docs/DocsAPICallTabs";

// This page displays all the routes used in the Amendments controller to retrieve information about all Amendments
export default function DocsAmendments() {
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const paragraphClasses: string[] = ["mx-5", "mb-6", "md:mx-14"];
    const paragraphClassString: string = paragraphClasses.join(" ");

    const apiRoute = '/api/v1/amendments';

    return (
        <div id="apidocs-amendments" className="pb-30 sm:pb-65 md:pb-95">
            <SEO
                description="API documentation for the Amendments controller in ZAConstitution1996, which provides access to information about amendments to the south africa constitution."
                keywords="south africa constitution, constitutional amendments, api documentation, zaconstitution1996, amendments controller, api reference, south africa law, government api, legal framework, kyc1996"
                title="KYC1996: API Docs - Amendments"
            />

            <PageTitle title="Amendments" />

            <p className={paragraphClassString}>
                The <strong>Amendments</strong> controller has <strong>one route:</strong>
            </p>

            <CodeSnippet lang="http" lines={apiRoute} />

            <p className={paragraphClassString}>
                This route returns an array of objects. Each object contains the name of the amendment, the date it came into effect, and a reference to the amendment.
            </p>

            <p className={paragraphClassString}>
                The following type is returned:
            </p>
            <CodeSnippet lang="typescript" lines={`{
    "amendmentTitle": string,
    "dateOfEffect": string,
    "reference": string
}`} />

            <p className={paragraphClassString}>
                Here's an example of how to call the route (code is horizontally scrollable on mobile):
            </p>

            <DocsAPICallTabs link={apiRoute} />
        </div>
    )
}