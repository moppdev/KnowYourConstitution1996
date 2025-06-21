import type { ScheduleThree } from "../types/Schedules";

// component that displays Schedule Three's contents
export default function ScheduleThreeDisplay({schedule}: {schedule: ScheduleThree})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for each section
    const sectionContainer: string[] = ["mb-12"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    console.log(schedule);

    return (
        <>
            {
                schedule.parts.map((part) => (
                    <div key={`${part.partID}`} id={`part-${part.partID}`} className={sectionContainerClassString}>
                        <h2 className="italic underline">{`Part ${part.partID}) - ${part.partName}`}</h2>
                        {
                            schedule.electionProcedures.filter((proc) => proc.sectionThreePart === part.partID).map((proc) => (
                                <div className="my-12">
                                    <h3>{proc.sectionID}) {proc.sectionTitle}</h3>
                                    {
                                    proc.sectionText ? proc.sectionText : 
                                        schedule.subsections
                                            .filter((subsection) => subsection.sectionID === proc.sectionID && subsection.sectionThreePart === proc.sectionThreePart)
                                            .map((subsection) => {
                                                const id = subsection.subsectionID;

                                                if (/^[1-9]{1,2}$/.test(id)) {
                                                    // Pure digits (1 or 2 numbers only)
                                                    return <div key={id}>({id}) {subsection.sectionText}</div>;
                                                } else if (/0/.test(id)) {
                                                    // Starts with 0
                                                    if (id.length > 1) {
                                                        const match = subsection.subsectionID.match(/[a-z]/);
                                                        return <div key={id} className="ml-3 md:ml-5">({match ? match[0] : subsection.subsectionID}) - {subsection.sectionText}</div>;
                                                    } else {
                                                        return <div key={id}>{subsection.sectionText}</div>;
                                                    }
                                                } else {
                                                    return <div key={id}>{subsection.sectionText}</div>;
                                                }
                                            })}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}