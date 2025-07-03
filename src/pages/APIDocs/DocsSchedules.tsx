import PageTitle from "../../components/PageTitle";
import CodeSnippet from "../../components/docs/CodeSnippet";
import DocsAPICallTabs from "../../components/docs/DocsAPICallTabs";

// This page displays all the routes used in the Schedules controller to retrieve information about each Schedule
export default function DocsSchedules() {
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

    const apiRoute = '/api/v1/schedules';

    return (
        <div id="apidocs-schedules" className="pb-30 sm:pb-65 md:pb-95">
            <PageTitle title="Schedules" />

            <p className={paragraphClassString}>
                The <strong>Schedules</strong> controller exposes <strong>nine routes:</strong>
            </p>

            <CodeSnippet lang="http" lines={apiRoute + `\n${apiRoute}/one` + `\n${apiRoute}/one/a`
                + `\n${apiRoute}/two` + `\n${apiRoute}/three` + `\n${apiRoute}/four` + `\n${apiRoute}/five` + `\n${apiRoute}/six` + `\n${apiRoute}/seven`} />

            <hr className={dividerString} />

            <div id="route-0" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{apiRoute}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns an array of objects, each containing the ID and title of each schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "scheduleID": string,
    "scheduleTitle": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={apiRoute} />
            </div>

            <hr className={dividerString} />

            <div id="route-1" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/one`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 1: <span className="italic">National Flag</span>. The response is an array of objects, each containing the ID and text content of each section in the schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "sectionID": number,
    "sectionText": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/one`} />
            </div>

            <hr className={dividerString} />

            <div id="route-1a" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/one/a`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 1A: <span className="italic">Geographical Areas of Provinces</span>. The response is an array of objects, each containing the province name and a CSV string listing the map names used to demarcate its borders.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "province": string,
    "mapCSV": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/one/a`} />
            </div>

            <hr className={dividerString} />

            <div id="route-2" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/two`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 2: <span className="italic">Oaths and Solemn Affirmations</span>. 
                    The response is an object containing a list of oaths and a list of subsections for each oath.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "scheduleTwo_Oaths": [
      {
        "sectionID": number,
        "sectionTitle": string,
        "sectionText": string
      }
    ],
    "subsections": [
      [
        {
          "sectionID": number,
          "subsectionID": string,
          "subsectionText": string
        }
      ]
    ]
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/two`} />
            </div>

            <hr className={dividerString} />

            <div id="route-3" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/three`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 3: <span className="italic">Election Procedures</span>. 
                    The response is an object containing a list of parts, a list of sections (called electionProcedures), and a list of subsections.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "parts": [
      {
        "partID": string,
        "partName": string
      }
    ],
    "electionProcedures": [
      {
        "sectionID": number,
        "sectionThreePart": string,
        "sectionTitle": string,
        "sectionText": string
      }
    ],
    "subsections": [
      {
        "sectionID": number,
        "sectionThreePart": string,
        "subsectionID": string,
        "sectionText": string
      }
    ]
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/three`} />
            </div>

            <hr className={dividerString} />

            <div id="route-4" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/four`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 4: <span className="italic">Functional Areas of Concurrent National and Provincial Legislative Competence</span>. 
                    The response is an array of objects, each containing a part ID and a CSV string listing the competencies.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "partID": string,
    "partCSV": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/four`} />
            </div>

            <hr className={dividerString} />

            <div id="route-5" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/five`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 5: <span className="italic">Functional Areas of Exclusive Provincial Legislative Competence</span>. 
                    The response is an array of objects, each containing a part ID and a CSV string listing the competencies.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "partID": string,
    "partCSV": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/five`} />
            </div>

            <hr className={dividerString} />

            <div id="route-6" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/six`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 6: <span className="italic">Transitional Arrangements</span>. The response is an object containing a list of sections 
                    (called transitionalArrangements), a list of subsections, and a list of clauses.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "transitionalArrangements": [
      {
        "sectionID": number,
        "sectionTitle": string,
        "sectionText": string
      }
    ],
    "subsections": [
      {
        "sectionID": number,
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

                <DocsAPICallTabs link={`${apiRoute}/six`} />
            </div>

            <hr className={dividerString} />

            <div id="route-7" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/seven`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    This route returns the contents of Schedule 7: <span className="italic">Laws Repealed</span>. 
                    The response is an array of objects, each containing the act number of a repealed law and its full title.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`{
    "actNum": string,
    "title": string
}`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable on mobile):
                </p>

                <DocsAPICallTabs link={`${apiRoute}/seven`} />
            </div>
        </div>
    )
}
