// this component display the table found in Schedule 6, Section 7, subsection 1b that determines NCOP seats allocated for the first election after the 1996 Constitution is enforced
export default function TransitionalNCOPTable({csvString}: {csvString: string})
{
    // split the CSV string into an array via the \n character to make accessing the contents easier
    const csvArray: string[] = csvString.split("\n");

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the table
    const tableClasses: string[] = ["table-auto", "border-collapse", "border-3", "border-(--text)", "max-[340px]:mx-0", "max-[639px]:mx-5", "sm:mx-10", "my-8", "lg:mb-6"];
    const tableClassString: string = tableClasses.join(" ");    
    
    // Classes for the table headings and cells
    const tableHeadingClasses: string[] = ["border-3", "border-(--text)", "p-2", "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)"];
    const headingClassString: string = tableHeadingClasses.join(" ");    
    
    const tableCellClasses: string[] = ["border", "border-(--text)", "p-2", "max-[420px]:p-1"];
    const cellClassString: string = tableCellClasses.join(" ");

    return (
        <div id="transitional-ncop-table">
            {/* Display the actual subsection text before the table */}
            <p>{`${csvArray[0]} ${csvArray[1]}`}</p>


            {/* The table that will display NCOP allocations */}
            <table className={tableClassString}>
                <thead>
                    {
                        <tr>
                            {
                                csvArray[3].split(";").map((title) => (
                                    <th className={headingClassString} key={title}>{title}</th>
                                ))
                            }
                        </tr>
                    }
                </thead>
                <tbody>
                    {
                        csvArray.slice(4, 43).map((elem, index) => {
                                const cells = elem.split(";");
                                return (
                                    <tr key={index}>
                                        {cells.map((cell, i) => (
                                            <td className={cellClassString} key={i}>{cell}</td>
                                        ))}
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}