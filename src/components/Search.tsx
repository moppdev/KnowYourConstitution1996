import { useEffect, useState } from "react";
import { getSearchAPIData } from "../api/SearchAPI";
import type { UnitedObject } from "../types/Search";
import Loading from "./Loading";

// component that implements searching through the constitution contents on Home
export default function Search()
{
    // state variable for results found
    const [results, setResults] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState<UnitedObject | null>(null);

    useEffect(() => {
        async function getData() {
            const data : UnitedObject | null = await getSearchAPIData();
            setSearchData(data);
        }

        getData();
    })

    // function that searches for results among sections, chapters, annexures, schedules to return a list of links to various pages
    async function searchResults(event: React.ChangeEvent<HTMLInputElement>)
    {
        // make the results div visible
        setVisible(true);

        // get the value from the event target
        const input = event?.target ? event.target.value : "";

        if (input === "")
        {
            setVisible(false);
        }

        // find the dropdown and get its textContent
        const dropper = document.getElementsByName("dropper")[0] as HTMLSelectElement | null;
        let selected: string | null = "";

        if (dropper)
        {
            selected = dropper.options[dropper.selectedIndex].value;

            // check the value from the dropdown to drill-down results
            switch (selected)
            {
                case "All":
                    console.log(results);
                break;
                case "Annexure":
                    console.log(4);
                break;
                case "Chapter":
                    console.log(6);
                break;
                case "Schedule":
                    console.log(8);
                break;
                case "Section":
                    console.log(28);
                break;
            }
        }
    }
    /// END OF SEARCHER FUNCTION ///


    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // classes for the container that holds both search-container and results
    const searchContainClasses: string[] = ["bg-(--background-color)", "rounded-lg", "md:mb-10", 
        "mx-5", "mb-4", "md:mr-40", "lg:mr-60", "md:ml-12", "border-(--header-footer-nav)", 
        "border-3"];
    const searchContainClassString: string = searchContainClasses.join(" ");

    // classes for search-container
    const barAndDropperClasses: string[] = ["flex", "flex-row", "w-full", "h-full", "gap-2", "items-stretch"];
    const barAndDropperClassString: string = barAndDropperClasses.join(" ");

    // classes for the search-options dropdown
    const dropdownClasses: string[] = ["h-full", "p-3", "sm:w-[35%]", "bg-(--header-footer-nav-text)", "border-(--header-footer-nav)", "border-r-3", "rounded-tl-md", "rounded-bl-md"];
    const dropdownClassString: string = dropdownClasses.join(" ");

    // classes for the search bar itself
    const barClasses: string[] = ["h-full", "p-3", "w-[65%]", "focus:appearance-none outline-none"];
    const barClassString: string = barClasses.join(" ");

    // classes for the label above the entire search
    const labelClasses: string[] = ["p-1", "mt-6", "mx-4", "md:mr-40", "lg:mr-60", "md:ml-11"];
    const labelClassString: string = labelClasses.join(" ");

    // classes for the results of the search
    const resultsClasses: string[] = ["border-t-1", "z-10"];
    const resultsClassString: string = resultsClasses.join(" ");

    // return the search component
    return (
        <section id="searcher" className="my-10">
            <h3 className="text-xl mx-5 md:mr-40 lg:mr-60 md:ml-12">Search</h3>
            <p className="mx-5 md:mx-12 my-5">
              Need to find something quickly? Why not give the search bar a whirl?
            </p>
            <label htmlFor="dropper" className={labelClassString}>Give it a try:</label>
            <div id="search-container" className={searchContainClassString}>
                <div id="search" className={barAndDropperClassString}>
                    <select name="dropper" className={dropdownClassString} id="search-options">
                        <option>All</option>
                        <option>Section</option>
                        <option>Chapter</option>
                        <option>Schedule</option>
                        <option>Annexure</option>
                    </select>
                    <input id="search-bar" onChange={(event) => {searchResults(event)}} onBlur={() => {setVisible(false)}} className={barClassString} placeholder="Search..."/>
                </div>
                {
                    visible &&                
                    <div id="results" className={resultsClassString}>
                        {loading ? <Loading /> : 
                        <ul className="list-none">
                            {!results && <li className="p-4">No results found</li>}
                        </ul>}
                    </div>
                }
            </div>
        </section>
    )
}