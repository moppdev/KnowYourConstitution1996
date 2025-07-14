import { useEffect, useState } from "react";
import { getSearchAPIData } from "../api/SearchAPI";
import type { UnitedObject, UnitedResult } from "../types/Search";
import Loading from "./Loading";
import type { Schedule } from "../types/Schedules";
import { NavLink } from "react-router";
import type { Chapter, Section } from "../types/Main";
import type { Annexure } from "../types/Annexures";

// component that implements searching through the constitution contents on Home
export default function Search()
{
    // state variable for results found
    const [results, setResults] = useState<Schedule[] | Chapter[] | Annexure[] | Section[] | UnitedResult[] | null>(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState<UnitedObject | null>(null);

    // function that searches for results among sections, chapters, annexures, schedules to return a list of links to various pages
    useEffect(() => {
        async function fetchData() {
            const data : UnitedObject | null = await getSearchAPIData();
            setSearchData(data);
        }

        fetchData();
    }, []);

    async function searchResults(event: React.ChangeEvent<HTMLInputElement>)
    {
        // make the results div visible
        setVisible(true);

        // get the value from the event target
        const input = event?.target ? event.target.value : null;

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
            const regex = input ? new RegExp(input, "i") : null;

            if (searchData)
            {
                // check the value from the dropdown to drill-down results
                switch (selected)
                {
                    case "All":
                        if (regex)
                        {
                            // if regex is truthy, get all the results needed and assign them to results
                            setResults(getResultsFromAll(searchData, regex));
                        }
                        setLoading(false);
                    break;
                    case "Annexure":
                        if (regex)
                        {
                            // if regex is truthy, set results using the filtered results of the array
                            setResults(searchData["annexures"].filter((item) => regex.test(`Annexure ${item.annexureID}: ${item.annexureTitle}`)));
                        }
                        setLoading(false);
                    break;
                    case "Chapter":
                        if (regex)
                        {
                            // if regex is truthy, set results using the filtered results of the array (only return the first 5 elements from the filtered array)
                            setResults(searchData["chapters"].filter((item) => regex.test(`Chapter ${item.chapterID}: ${item.chapterTitle}`)).slice(0, 5));
                        }
                        setLoading(false);
                    break;
                    case "Schedule":
                        if (regex)
                        {
                            // if regex is truthy, set results using the filtered results of the array (only return the first 5 elements from the filtered array)
                            setResults(searchData["schedules"].filter((item) => regex.test(item.scheduleTitle)).slice(0, 5));
                        }
                        setLoading(false);
                    break;
                    case "Section":
                        if (regex)
                        {
                            // if regex is truthy, set results using the filtered results of the array (only return the first 5 elements from the filtered array)
                            setResults(searchData["sections"].filter((item) => regex.test(`Section ${item.sectionID}: ${item.sectionTitle}`)).slice(0, 5));
                        }
                        setLoading(false);
                    break;
                }
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

    // classes for the container of results from the search
    // const resultsContainerClasses: string[] = ["z-20"];
    // const resultsContainerClassString: string = resultsContainerClasses.join(" ");

    // classes for each result
    const resultClasses: string[] = ["p-4", "text-(--border-link-button)", "border-t-1", "border-(--text)", "hover:bg-(--header-footer-nav)/10"];
    const resultClassString: string = resultClasses.join(" ");

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
                    <input id="search-bar" 
                    onBlur={() => {
                        setTimeout(() => {
                            setVisible(false);
                        }, 150);
                    }}
                    onChange={(event) => {searchResults(event)}}
                    className={barClassString} 
                    placeholder="Search..."/>
                </div>
                {
                    visible &&                
                    <div id="results">
                        {
                            loading ? <Loading /> : 
                            (!results || results.length === 0 ? <div className="p-4 border-t-1 border-(--text)">No results found</div> : results.map((result, index) => {
                                if ("scheduleTitle" in result) {
                                    return (
                                        <NavLink key={`SCR` + result.scheduleID} to={`schedule/${result.scheduleID.toLowerCase()}`}>
                                            <div className={resultClassString}>
                                                {result.scheduleTitle}
                                            </div>
                                        </NavLink>
                                    );
                                }

                                if ("chapterTitle" in result) {
                                    return (
                                        <NavLink key={`CR` + result.chapterID} to={result.chapterID === 0 ? "/preamble" : `chapter/${result.chapterID}`}>
                                            <div className={resultClassString}>
                                                {result.chapterID === 0 ? "Preamble" : `Chapter ${result.chapterID}: ${result.chapterTitle}`}
                                            </div>
                                        </NavLink>
                                    );
                                }

                                if ("annexureTitle" in result) {
                                    return (
                                        <NavLink key={`AR` + result.annexureID} to={`annexure/${result.annexureID}`}>
                                            <div className={resultClassString}>
                                                {`Annexure ${result.annexureID}: ${result.annexureTitle}`}
                                            </div>
                                        </NavLink>
                                    );
                                }

                                if ("sectionTitle" in result) {
                                    return (
                                        <NavLink key={`SER` + result.sectionID} to={result.chapterID === 0 ? "/preamble" : `chapter/${result.chapterID}#section-${result.sectionID}`}>
                                            <div className={resultClassString}>
                                                {result.chapterID === 0 ? "Preamble" : `Section ${result.sectionID}: ${result.sectionTitle}`}
                                            </div>
                                        </NavLink>
                                    );
                                }

                                if ("navLink" in result)
                                {
                                    return (
                                        <NavLink key={`UR` + index} to={result.navLink}>
                                            <div className={resultClassString}>
                                                {result.title}
                                            </div>
                                        </NavLink>
                                    );
                                }
                                return null;
                            }))
                        }
                    </div>
                }
            </div>
        </section>
    )
}

// function that gets results from UnitedObject (Sections, Annexures, etc) and combines them for the All search option. 
// each result is converted to an object with navLink and title attributes (UnitedResult)
function getResultsFromAll(data: UnitedObject, input: RegExp): UnitedResult[] | null
{
    // init the array that will be returned
    const baseArray: UnitedResult[] = [];

    // get results from all the data
    const annexureResults: Annexure[] = data["annexures"].filter((item) => input.test(`Annexure ${item.annexureID}: ${item.annexureTitle}`));
    // filtering twice to remove preamble from chapters to prevent it from appearing twice in results
    const chapterResults: Chapter[] = data["chapters"].filter((item) => input.test(`Chapter ${item.chapterID}: ${item.chapterTitle}`)).filter((item) => item.chapterID !== 0);
    const sectionResults: Section[] = data["sections"].filter((item) => input.test(`Section ${item.sectionID}: ${item.sectionTitle}`));
    const scheduleResults: Schedule[] = data["schedules"].filter((item) => input.test(item.scheduleTitle));

    // if all results arrays are empty, return null
    if (annexureResults.length == 0 && chapterResults.length == 0 && sectionResults.length == 0 && scheduleResults.length == 0)
    {
        return null;
    }

    // function that takes an array as parameter
    // converts contents of array to UnitedResult objects, and pushes them to the array
    const converter = (array: Schedule[] | Chapter[] | Annexure[] | Section[]) => {
        array.forEach((elem) => {
            if ("scheduleTitle" in elem)
            {
                baseArray.push({
                    navLink: `schedule/${elem.scheduleID.toLowerCase()}`,
                    title: elem.scheduleTitle
                })
            }

            if ("chapterTitle" in elem)
            {
                baseArray.push({
                    navLink: elem.chapterID === 0 ? "/preamble" : `chapter/${elem.chapterID}`,
                    title: elem.chapterID === 0 ? "Preamble" : `Chapter ${elem.chapterID}: ${elem.chapterTitle}`
                })
            }

            if ("annexureTitle" in elem)
            {
                baseArray.push({
                    navLink: `annexure/${elem.annexureID}`,
                    title: `Annexure ${elem.annexureID}: ${elem.annexureTitle}`
                })
            }

            if ("sectionTitle" in elem)
            {
                baseArray.push({
                    navLink: elem.chapterID === 0 ? "/preamble" : `chapter/${elem.chapterID}#section-${elem.sectionID}`,
                    title: elem.chapterID === 0 ? "Preamble" : `Section ${elem.sectionID}: ${elem.sectionTitle}`
                })
            }
        })
    };

    // create an array to hold all arrays except baseArray
    // then use the foreach loop to call converter on each of the arrays
    const tempArray = [annexureResults, chapterResults, sectionResults, scheduleResults];
    tempArray.forEach((array) => {
        converter(array);
    })

    // return only the first 10 objects
    return baseArray.slice(0, 5);
}