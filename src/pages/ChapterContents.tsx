import { useLocation, useParams } from "react-router";
import BackToContents from "../components/BackToContents";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import type { FullChapter, NonDerogableRight } from "../types/Main";
import { getChapterContents, getNonDerogableRights } from "../api/MainAPI";
import ContentNavigatorCard from "../components/ContentNavigatorCard";

export default function ChapterContents()
{
     // get the chapter id from the URL parameters
    const {id} = useParams();

    // Change the title in the browser tab
    document.title = `KYC1996 | Chapter ${id!}`;

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for the container
    const chapterContainer: string[] = ["mx-5", "md:mx-8", "py-5"];
    const chapterContainerClassString: string = chapterContainer.join(" ");    
    
    // classes for each section
    const sectionContainer: string[] = ["mx-2", "md:mx-13", "py-5"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    // Classes for the table
    const tableClasses: string[] = ["table-auto", "border-collapse", "border-3", "border-(--text)", "max-[340px]:mx-0", "max-[639px]:mx-5", "sm:mx-10", "my-8", "lg:mb-6"];
    const tableClassString: string = tableClasses.join(" ");    
    
    // Classes for the table headings and cells
    const tableHeadingClasses: string[] = ["border-3", "border-(--text)", "p-2", "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)"];
    const headingClassString: string = tableHeadingClasses.join(" ");    
    
    const tableCellClasses: string[] = ["border", "border-(--text)", "p-2", "max-[420px]:p-1"];
    const cellClassString: string = tableCellClasses.join(" ");

    // classes for the bottom navigation
    const nextClasses: string[] = ["flex", "sm:flex-row", "flex-col", "justify-between", "sm:items-center"];
    const nextClassString: string = nextClasses.join(" ");

    // Use the useState hook to create state variables for loading and the schedule's contents
    const [loading, setLoading] = useState(true);
    const [chapter, setChapter] = useState<FullChapter | null>(null);
    const [nonDerogableRights, setNonDerogableRights] = useState<NonDerogableRight[] | null>(null);

    const {hash} = useLocation();

    useEffect(() => {
        // if user has been led to this page with a link with an id hash
            if (hash) {
               setTimeout(() => {
                     const elem = document.querySelector(hash);
                    if (elem) 
                    {
                        elem.scrollIntoView({ behavior: "smooth"});
                    }
                }, 1500);
            }
            else
            {
                // Scroll to top on arrival implementation
                window.scrollTo(0, 0);
            }

        // async function that gets the chapter by number
        async function fetchChapter() {
            if (id)
            {
                const data: FullChapter | null = await getChapterContents(parseInt(id));
                setChapter(data);
            }

            const ndrData: NonDerogableRight[] | null = await getNonDerogableRights();
            setNonDerogableRights(ndrData);
            
            setLoading(false);
        }

        fetchChapter();
    }, [id, hash])

    return (
        <>
            <Header />

            <Container>
                <BackToContents />

                {loading && (
                    <Loading />
                )}

                {!loading && chapter && (
                    <article>
                        {/* <section id="index">

                    </section> TODO: Index */} 

                        <section id={`chapter-${id}-content`} className={chapterContainerClassString}>
                            <PageTitle title={`Chapter ${id} - ${chapter?.chapterTitle}`} />

                            {
                                chapter.fullSections.map((section) => (
                                    /* Every section */
                                    <div id={`section-${section.sectionID}`} key={section.sectionID} className={sectionContainerClassString}>

                                        {/* section title */}
                                        <h2 className="py-4" id={`section-${section.sectionID}-desc`}>
                                            <span>{(section.sectionID=== 23065) ? "230A)" :`${section.sectionID})`} </span>
                                            <span className="italic underline text-xl">{`${section.sectionTitle}`}</span>
                                        </h2>

                                        {/* subsections */}
                                        <div id={`section-${section.sectionID}-subsections`}>
                                                {/* if sectionText != null, print the sectionText */}
                                                {section.sectionText && <p>{section.sectionText}</p>}

                                                {/* if !sectionText then print the subsections of the section */}
                                                {!section.sectionText && (
                                                    section.subSections.map((subsection) => (
                                                        <div className="my-7" id={`subsection-${subsection.subsectionID}`} key={`subsection-${subsection.subsectionID}`}>
                                                            {
                                                                (() => {
                                                                    const id = subsection.subsectionID;

                                                                    if (/^[1-9]{1,2}$/.test(id)) {
                                                                    // Pure digits (1 or 2 numbers only)
                                                                    return <div>({id}) {subsection.subsectionText}</div>;
                                                                    } else if (/0/.test(id)) {
                                                                    // Starts with 0
                                                                    {
                                                                        if (id.length > 1)
                                                                        {
                                                                            const match = subsection.subsectionID.match(/[a-z]/);
                                                                            return <div className="ml-3 md:ml-5">({match ? match[0] : subsection.subsectionID}) - {subsection.subsectionText}</div>;
                                                                        }
                                                                        else
                                                                        {
                                                                            return <div>{subsection.subsectionText}</div>;
                                                                        }
                                                                    }
                                                                    } else {
                                                                    // Alphanumeric like 10a, 11b, etc.
                                                                        if (section.sectionID == 37 && id.trim().toLowerCase() == "5c")
                                                                        {
                                                                            /* Section 57c contains the Non Derogable Rights table */
                                                                            return (<div className="ml-3 md:ml-5">
                                                                                ({id}) - {subsection.subsectionText}

                                                                                {/* Table of Non Derogable Rights */}
                                                                                <table className={tableClassString}>
                                                                                    <caption className="caption-top italic">
                                                                                        Table of Non Derogable Rights
                                                                                    </caption>
                                                                                    <thead>
                                                                                        <tr key={"amendment-table-header"}>
                                                                                            <th className={headingClassString}>Section Number</th>
                                                                                            <th className={headingClassString}>Section Title</th>
                                                                                            <th className={headingClassString}>Protection Extent</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {nonDerogableRights!.map((ndr) => (
                                                                                            <tr key={`ndr-section-${ndr.sectionNumber}`}>
                                                                                                <td className={cellClassString}>{ndr.sectionNumber}</td>
                                                                                                <td className={cellClassString}>{ndr.sectionTitle}</td>
                                                                                                <td className={cellClassString}>{ndr.protectionExtent}</td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>);
                                                                        }
                                                                        return <div className="ml-3 md:ml-5">
                                                                            ({id}) - {subsection.subsectionText}
                                                                        </div>
                                                                    }
                                                                })()
                                                            }
                                                            {
                                                                // if there are clauses print them
                                                                section.clauses && section.clauses.map((clause) => (
                                                                    (clause.sectionID == section.sectionID && clause.subsectionID == subsection.subsectionID && (
                                                                        <div className="ml-6 md:ml-10" key={`subsection-${subsection.subsectionID}-clause-${clause.clauseID}`} id={`subsection-${subsection.subsectionID}-clause-${clause.clauseID}`}>
                                                                            (( {clause.clauseID} )) - {clause.clauseText}
                                                                        </div>
                                                                    ))
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                )}
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </article>
                )}

                {!loading && !chapter && (
                    <p>Something went wrong with retrieving the contents of Chapter {id!}</p>
                )}

                <div id="next-options" className={nextClassString}>
                    {
                        (parseInt(id!) === 1) ? 
                        <ContentNavigatorCard contentType="preamble" id="-1" direction="l"/> : 
                        <ContentNavigatorCard contentType="chapter" id={(parseInt(id!) - 1).toString()} direction="l"/>
                    }

                    {
                        (parseInt(id!) === 14) ? 
                        <ContentNavigatorCard contentType="preamble" id="-1" direction="r"/> : 
                        <ContentNavigatorCard contentType="chapter" id={(parseInt(id!) + 1).toString()} direction="r"/>
                    }
                </div>
            </Container>

            <Footer />
        </>
    )
}