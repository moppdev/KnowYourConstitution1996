import type { ScheduleSeven } from "../../types/Schedules";

// component that displays Schedule Seven's contents
export default function ScheduleSevenDisplay({schedule}: {schedule: ScheduleSeven[]})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for each section
    const sectionContainer: string[] = ["mb-12"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    // Classes for the table
    const tableClasses: string[] = ["table-auto", "border-collapse", "border-3", "border-(--text)", "max-[340px]:mx-0", "max-[639px]:mx-5", "sm:mx-10", "my-8", "lg:mb-6"];
    const tableClassString: string = tableClasses.join(" ");    
    
    // Classes for the table headings and cells
    const tableHeadingClasses: string[] = ["border-3", "border-(--text)", "p-2", "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)"];
    const headingClassString: string = tableHeadingClasses.join(" ");    
    
    const tableCellClasses: string[] = ["border", "border-(--text)", "p-2", "max-[420px]:p-1"];
    const cellClassString: string = tableCellClasses.join(" ");


    return (
            <table className={tableClassString}>
                <thead>
                    <tr>
                        <th className={headingClassString}>Act Number</th>
                        <th className={headingClassString}>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedule.map((row, index) => (
                            <tr key={index}>
                                <td className={cellClassString}>{row.actNum}</td>
                                <td className={cellClassString}>{row.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    )
}