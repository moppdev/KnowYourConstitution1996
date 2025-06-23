import type { ScheduleSix } from "../../types/Schedules";
import TransitionalNCOPTable from "./TransitionalNCOPTable";

// component that displays Schedule Six's contents
export default function ScheduleSixDisplay({schedule}: {schedule: ScheduleSix})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for each section
    const sectionContainer: string[] = ["mb-12"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    return (
        <>
            {
                schedule.transitionalArrangements.map((arrangement) => (
                    /* For every section (arrangement) */
                    <section key={`${arrangement.sectionID}`} id={`section-${arrangement.sectionID}`} className={sectionContainerClassString}>

                        {/* Display title */}
                        <h2 className="py-4" id={`section-${arrangement.sectionID}-desc`}>
                            <span>{`${arrangement.sectionID})`} </span>
                            <span className="italic underline text-xl">{`${arrangement.sectionTitle}`}</span>
                        </h2>

                        {/* If sectionText is null, check for and display subsections + clauses */}
                        <div id={`section-${arrangement.sectionID}-subsections`} key={`section-${arrangement.sectionID}-subsections`}>
                            {
                                arrangement.sectionText && arrangement.sectionText
                            }
                            { !arrangement.sectionText && 
                                schedule.subsections.filter((subsection) => subsection.sectionID === arrangement.sectionID)
                                .map((subsection) => {
                                    const id = subsection.subsectionID;

                                    /* When the loop reaches Section 7, subsection 1b print the Transitional NCOP Table */
                                    if (id === "1b" && arrangement.sectionID === 7)
                                    {
                                        return <div className="ml-3 md:ml-5" id={`subsection-${subsection.subsectionID}`}>
                                            {`(${subsection.subsectionID})`}
                                            <TransitionalNCOPTable csvString={subsection.subsectionText}/>
                                        </div>
                                    }

                                    if (/^[1-9]{1,2}$/.test(id)) {
                                    // Pure digits (1 or 2 numbers only)
                                        return <div>({id}) {subsection.subsectionText}</div>;
                                    }
                                    if (/0/.test(id)) {
                                        // Starts with 0
                                        if (id.length > 1) {
                                            const match = subsection.subsectionID.match(/[a-z]/);
                                            return <div key={subsection.subsectionID} id={`subsection-${subsection.subsectionID}`} className="ml-3 md:ml-5">({match ? match[0] : subsection.subsectionID}) - {subsection.subsectionText}</div>;
                                        } else {
                                            return <div key={subsection.subsectionID} id={`subsection-${subsection.subsectionID}`}>{subsection.subsectionText}</div>;
                                        }
                                    } 
                                    else
                                    {
                                            return (
                                                <div className="ml-3 md:ml-5" id={`subsection-${subsection.subsectionID}`}>
                                                    ({id}) - {subsection.subsectionText}
                                                    {schedule.clauses && schedule.clauses
                                                        .filter((clause) => clause.subsectionID === subsection.subsectionID)
                                                        .map((clause) => (
                                                            <p key={clause.clauseID} className={`ml-6 md:ml-10`}>{`((${clause.clauseID})) - ${clause.clauseText}`}</p>
                                                        ))
                                                    }
                                                </div>
                                            );
                                    }
                                })
                            }

                        </div>
                    </section>
                ))
            }
        </>
    )
}