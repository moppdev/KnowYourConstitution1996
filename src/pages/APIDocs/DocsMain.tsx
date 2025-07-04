import SEO from "../../components/SEO";
import PageTitle from "../../components/PageTitle";
import CodeSnippet from "../../components/docs/CodeSnippet";
import DocsAPICallTabs from "../../components/docs/DocsAPICallTabs";

// This page displays all the routes used in the Main controller to retrieve information about all contents in Chapters 1–14
export default function DocsMain() {
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const paragraphClasses: string[] = ["mx-5", "mb-6", "md:mx-14"];
    const paragraphClassString: string = paragraphClasses.join(" ");

    const titleClasses: string[] = ["mx-5", "mb-6", "md:mx-14", "text-xl", "italic"];
    const titleClassString: string = titleClasses.join(" ");

    const routeClasses: string[] = ["pt-8"];
    const routeClassString: string = routeClasses.join(" ");

    const dividerClasses: string[] = ["mx-27", "opacity-45", "mt-10"];
    const dividerString: string = dividerClasses.join(" ");

    const apiRoute = '/api/v1/main';

    // change title of page
    document.title = "KYC1996 | API Docs - Main (Chapters 1 - 14)";

    return (
        <div id="apidocs-main" className="pb-30 sm:pb-65 md:pb-95">
            <SEO
                description="API documentation for the Main controller in ZAConstitution1996, which provides access to information about the contents of Chapters 1 - 14 of the South African Constitution, including chapters, sections, and the Preamble."
                keywords="api documentation, main api, chapters api, sections api, preamble api, zaconstitution1996, south african constitution api, legal api, 1996 constitution, kyc1996"
                title="KYC1996 | API Docs - Main (Chapters 1 - 14)"
            />
                        
            <PageTitle title="Main" />

            <p className={paragraphClassString}>
                The <strong>Main</strong> controller exposes <strong>seven routes:</strong>
            </p>

            <CodeSnippet lang="http" lines={`${apiRoute}/preamble` + `\n${apiRoute}/chapters` + `\n${apiRoute}/chapter/{chapterID}/sections`
                + `\n${apiRoute}/chapter/{chapterID}/sections/full` + `\n${apiRoute}/sections` + `\n${apiRoute}/section/{sectionID}/full`
                + `\n${apiRoute}/ndr`} />

            <hr className={dividerString} />

            <div id="route-1" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{apiRoute + "/preamble"}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the Preamble of the Constitution. The response is an object containing the title (which is simply "Preamble") and the full text of the Preamble.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
  "title": string,
  "preambleContents": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={apiRoute + "/preamble"} />
            </div>

            <hr className={dividerString} />

            <div id="route-2" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{apiRoute + "/chapters"}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns a list of chapters currently in the Constitution. The response is an array of objects, each containing the chapter's ID and title. 
                </p>

                <p className={paragraphClassString}>
                    <strong> Note:</strong> The Preamble has an ID of 0.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "chapterID": number,
    "chapterTitle": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={apiRoute + "/chapters"} />
            </div>

            <hr className={dividerString} />

            <div id="route-3" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/chapter/{chapterID}/sections`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns all sections within a specific chapter of the Constitution. The response is an array of objects, each containing the section ID, title, and text. 
                </p>

                <p className={paragraphClassString}>
                    <strong> Note:</strong> The text is not null when there are no subsections in the section.
                </p>

                <p className={paragraphClassString}>
                    This route requires a single parameter: <span className="italic">chapterID</span>. 
                    It is an integer value, accepting IDs from 0 (for the Preamble) to 14 (inclusive).
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>

                <CodeSnippet lang="typescript" lines={`{
    "sectionID": number,
    "sectionTitle": string,
    "sectionText": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/chapter/{chapterID}/sections`} />
            </div>

            <hr className={dividerString} />

            <div id="route-4" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/chapter/{chapterID}/sections/full`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the full contents of a chapter of the Constitution. The response is an object containing the chapter's ID, title, text 
                    (<strong>note:</strong> text is not null if the section has no subsections), an array of sections with their subsections, and an array of clauses (some subsections may include clauses).
                </p>

                <p className={paragraphClassString}>
                    This route requires a single parameter: <span className="italic">chapterID</span>. It is an integer value, accepting IDs from 0 (for the Preamble) to 14 (inclusive).
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>

                <CodeSnippet lang="typescript" lines={`{
  "chapterID": number,
  "chapterTitle": string,
  "fullSections": [
    {
      "sectionID": number,
      "sectionTitle": string,
      "sectionText": string,
      "subSections": [
        {
          "subsectionID": string,
          "subsectionText": string
        }
      ],
      "clauses": [
        {
          "sectionID": number,
          "subsectionID": string,
          "clauseID": string,
          "clauseText": string
        }
      ]
    }
  ]
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/chapter/{chapterID}/sections/full`} />
            </div>

            <hr className={dividerString} />

            <div id="route-5" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/sections`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns all sections in the Constitution (including the Preamble). The response is an array of objects, each containing the section ID, chapter ID, title, and text. 
                </p>

                <p className={paragraphClassString}>
                    <strong>Note:</strong> The text is not null when there are no subsections in the section.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>

                <CodeSnippet lang="typescript" lines={`{
    "sectionID": number,
    "chapterID": number,
    "sectionTitle": string,
    "sectionText": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/sections`} />
            </div>

            <hr className={dividerString} />

            <div id="route-6" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/section/{sectionID}/full`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the full contents of a specific section in the Constitution. The response includes the section's ID, title, text 
                    (<strong>note:</strong> text is not null if there are no subsections), an array of subsections, and an array of clauses (some subsections may contain clauses).
                </p>

                <p className={paragraphClassString}>
                    This route requires a single parameter: <span className="italic">sectionID</span>. 
                    It is an integer value, accepting IDs from 0 (for the Preamble) to 243 (inclusive).
                </p>

                <p className={paragraphClassString}>
                    <span className="underline"> Important:</span> Section 230A of Chapter 13 has an ID of 23065.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>

                <CodeSnippet lang="typescript" lines={`{
  "sectionID": number,
  "sectionTitle": string,
  "sectionText": string,
  "subSections": [
    {
      "subsectionID": string,
      "subsectionText": string
    }
  ],
  "clauses": [
    {
      "sectionID": number,
      "subsectionID": string,
      "clauseID": string,
      "clauseText": string
    }
  ]
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/section/{sectionID}/full`} />
            </div>

            <hr className={dividerString} />

            <div id="route-7" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/ndr`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the table of Non-Derogable Rights found in Section 37: <span className="italic">States of Emergency</span>. 
                    The response is an array of objects, each containing the section ID, title, and the extent of its protection during a State of Emergency.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>

                <CodeSnippet lang="typescript" lines={`{
    "sectionNumber": number,
    "sectionTitle": string,
    "protectionExtent": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/ndr`} />
            </div>
        </div>
    );
}
