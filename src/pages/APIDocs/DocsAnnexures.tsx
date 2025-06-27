import PageTitle from "../../components/PageTitle";
import CodeSnippet from "./CodeSnippet";
import DocsAPICallTabs from "./DocsAPICallTabs";

// this page displays all the routes used in the Schedules controller, to retrieve info about every Annexure
export default function DocsAnnexures()
{
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

    const apiRoute = '/api/v1/annexures'; // api route

    return (
        <div id="apidocs-annexures" className="pb-30 sm:pb-65 md:pb-95">
            <PageTitle title="Annexures" />
            
            <p className={paragraphClassString}>
                The <strong>Annexures</strong> controller has <strong>two routes: </strong>
            </p>
            
            <CodeSnippet lang="http" lines={apiRoute + `\n${apiRoute}/{annexureID}/full`} />
           
            <hr className={dividerString}/>

            <div id="route-1" className={routeClassString}>

                <h2 className={titleClassString}>
                    <strong>{apiRoute}</strong>
                </h2>

                <p className={paragraphClassString}>
                    The route returns an array of objects, each containing the id and title of each annexure.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "annexureID": string,
    "annexureTitle": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={apiRoute} />

            </div>

            <hr className={dividerString}/>

            <div id="route-2" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`${apiRoute}/{annexureID}/full`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    This route requires only one parameter, which is <span className="italic">annexureID</span>. The parameter is a string and only accepts these values: "A", "B", "C" and "D".
                </p>


                <p className={paragraphClassString}>
                    <strong>The route returns:</strong> an object containing the contents of an annexure including its ID, title, sections and subsections.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
  "annexureID": string,
  "annexureTitle": string,
  "annexureSections": [
    {
      "annexureID": string,
      "sectionID": number,
      "sectionTitle": string,
      "sectionText": string
    }
  ],
  "annexureSubsections": [
    {
      "sectionID": number,
      "subsectionID": string,
      "sectionText": string
    }
  ]
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/A/full`} />
            </div>
        </div>
    )
}