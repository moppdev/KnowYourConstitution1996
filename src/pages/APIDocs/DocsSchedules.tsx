import PageTitle from "../../components/PageTitle";
import CodeSnippet from "./CodeSnippet";
import DocsAPICallTabs from "./DocsAPICallTabs";

// this page displays all the routes used in the Schedules controller, to retrieve info about every Schedule
export default function DocsSchedules()
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

    const apiRoute = '/api/v1/schedules'; // api route

    return (
        <div id="apidocs-schedules" className="pb-30 sm:pb-65 md:pb-95">
            <PageTitle title="Schedules" />
            
            <p className={paragraphClassString}>
                The <strong>Schedules</strong> controller has <strong>nine routes: </strong>
            </p>
            
            <CodeSnippet lang="http" lines={apiRoute + `\n${apiRoute}/one` + `\n${apiRoute}/one/a` 
                + `\n${apiRoute}/two` + `\n${apiRoute}/three` + `\n${apiRoute}/four` + `\n${apiRoute}/five` + `\n${apiRoute}/six` + `\n${apiRoute}/seven`} />
           
            <hr className={dividerString}/>

            <div id="route-0" className={routeClassString}>

                <h2 className={titleClassString}>
                    <strong>{apiRoute}</strong>
                </h2>

                <p className={paragraphClassString}>
                    The route returns an array of objects, each containing the id and title of each schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "scheduleID": string,
    "scheduleTitle": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={apiRoute} />

            </div>

            <hr className={dividerString}/>

            <div id="route-1" className={routeClassString}>

                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/one`}</strong>
                </h2>

                <p className={paragraphClassString}>
                    The route returns the contents of Schedule 1: National Flag. It returns an array of objects, each containing the id and text content of each section in the schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "sectionID": number,
    "sectionText": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/one`} />

            </div>

            <hr className={dividerString}/>

            <div id="route-1a" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/one/a`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 1A: Geographical Areas of Provinces. It returns an array of objects, each containing the province's name and 
                    a CSV string of the names of the maps demarcating its borders.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "province": string,
    "mapCSV": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/one/a`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-2" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/two`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 2: Oaths and Solemn Affirmations. It returns a object, containing the list of oaths and a list of subsections per oath.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
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
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/two`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-3" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/three`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 3: Election Procedures. It returns an object, which contains a list of parts, a list of sections (electionProcedures) and a list of subsections from the schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
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
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/three`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-4" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/four`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 4: Functional Areas of Concurrent National and Provincial Legislative Competence. 
                    It returns an array of objects, each containing a part ID and a CSV string containing competencies.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "partID": string,
    "partCSV": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/four`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-5" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/five`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 5: Functional Areas of Exclusive Provincial Legislative Competence. 
                    It returns an array of objects, each containing a part ID and a CSV string containing competencies.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "partID": string,
    "partCSV": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable)
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/five`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-6" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/six`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 6: Transitional Arrangements. It returns an object, with a list of sections (arrangements), a list of subsections and a list of clauses from the schedule.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
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
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable)
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/six`} />
            </div>

            <hr className={dividerString}/>

            <div id="route-7" className={routeClassString}>
                <h2 className={titleClassString}>
                    <strong>{`\n${apiRoute}/seven`}</strong>
                </h2>

                 <p className={paragraphClassString}>
                    The route returns the contents of Schedule 7: Laws Repealed. It returns an array of objects, each containing the act number of a law, and that law's full name.
                </p>

                <p className={paragraphClassString}>
                    The following type is returned:
                </p>
                <CodeSnippet lang="typescript" lines={`[
  {
    "actNum": string,
    "title": string
  }
]`} />

                <p className={paragraphClassString}>
                    Here's an example of how to call the route (code is horizontally scrollable):
                </p>
                
                <DocsAPICallTabs link={`${apiRoute}/seven`} />
            </div>
        </div>
    )
}