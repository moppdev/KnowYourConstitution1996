import type { ScheduleTwo } from "../types/Schedules";

// component that displays Schedule Two's contents
export default function ScheduleTwoDisplay({schedule}: {schedule: ScheduleTwo})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for each section
    const sectionContainer: string[] = ["mb-12"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    return (
        <>
            {
                schedule.scheduleTwo_Oaths.map((section) => (
                    <div key={`${section.sectionID}`} id={`section-${section.sectionID}`} className={sectionContainerClassString}>
                        <h2 className="italic underline">{`${section.sectionID}) ${section.sectionTitle}`}</h2>
                        <div className="mt-2">
                            {section.sectionText
                                ? section.sectionText
                                : schedule.subsections
                                    .map((subsection) => (
                                        subsection.filter((subsection) => subsection.sectionID == section.sectionID).map((section) => (
                                            <div className="my-4">
                                                <span className="pr-2">({section.subsectionID})</span>
                                                <span>{section.subsectionText}</span>
                                            </div>
                                        ))
                                    ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}