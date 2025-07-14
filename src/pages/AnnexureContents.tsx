import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import type { AnnexureSubsections, FullAnnexure } from "../types/Annexures";
import { getAnnexureByLetter } from "../api/AnnexureAPI";
import BackToContents from "../components/BackToContents";
import ContentNavigatorCard from "../components/ContentNavigatorCard";
import SEO from "../components/SEO";

export default function AnnexureContents() 
{
    // get the annexure id from the URL parameters
    const {id} =  useParams();

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for the annexure
    const annexureContainer: string[] = ["mx-5", "md:mx-8", "py-5"];
    const annexureContainerClassString: string = annexureContainer.join(" ");    
    
    // classes for each section
    const sectionContainer: string[] = ["mx-2", "md:mx-13", "py-5"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

    // classes for the bottom navigation
    const nextClasses: string[] = ["flex", "sm:flex-row", "flex-col", "justify-between", "sm:items-center"];
    const nextClassString: string = nextClasses.join(" ");

    // Use the useState hook to create state variables for loading and the schedule's contents
    const [loading, setLoading] = useState(true);
    const [annexure, setAnnexures] = useState<FullAnnexure | null>(null);
    

    useEffect(() => {
        
        // async function that gets the schedule by number
        async function fetchSchedule() {
            if (id) {
                const data: FullAnnexure | null = await getAnnexureByLetter(id.toUpperCase() as "A" | "B" | "C" | "D");

                // loop through the annexure's subsections, and remove the leading "0" on some subsectionIDs
                if (data?.annexureSubsections) {
                    for (const subsection of data.annexureSubsections) {
                        if (subsection.subsectionID.startsWith("0")) {
                            subsection.subsectionID = subsection.subsectionID.substring(1);
                        }
                    }
                }

                setAnnexures(data);
            }
            setLoading(false);
        }

        fetchSchedule();
    }, [id]);

    return (
        <>
            <SEO
                title={`KYC1996 | Annexure ${id!.toUpperCase()}`}
                description="Explore the contents of Annexure A, B, C, or D of the Constitution of South Africa."
                keywords={`annexure ${id}, constitution annexure ${id}, south africa constitution, 1996 constitution, annexures, legal annexures, annexure text, annexure ${id} full text, constitutional documents, kyc1996`}
            />
            <Header />

            <Container>
                <BackToContents />
                
                {loading && (
                    <Loading />
                )}

                {!loading && annexure && (
                        <section id={`annexure-${annexure.annexureID.toLowerCase()}-content`} className={annexureContainerClassString}>
                            <PageTitle title={`Annexure ${id!.toUpperCase()} - ${annexure!.annexureTitle}`} />

                            {
                                annexure.annexureSections.map((section) => (
                                    <div id={`section-${section.sectionID}`} key={section.sectionID} className={sectionContainerClassString}>

                                        <h2 className="py-4" id={`section-${section.sectionID}-desc`}>
                                            <span>{`${section.sectionID})`} </span>
                                            <span className="italic underline">{`${section.sectionTitle}`}</span>
                                        </h2>

                                        { section.sectionText !== "" &&
                                            <ul className="list-none" id={`annexure-${annexure.annexureID.toLowerCase()}-subsections`}>
                                                {section.sectionText ? <li>{section.sectionText}</li> :
                                                    FilterAnnexureSubsections(annexure, section.sectionID)?.map((subsection) => (
                                                        <li key={`subsection${subsection.subsectionID}`}>
                                                            {`${subsection.subsectionID}) ${subsection.sectionText}`}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </section>
                    )
                }

                {!loading && !annexure && (
                    <p>Something went wrong retrieving the contents of Annexure {id!.toLowerCase()}</p>
                )}

                 {/* navigation between annexures */}
                <div id="next-options" className={nextClassString}>
                    {
                        (id! === "a") ? 
                        <ContentNavigatorCard contentType="annexure" id={"b"} direction="r"/> : 
                        ""
                    }

                    {
                        (id! === "b") ? 
                        <>
                            <ContentNavigatorCard contentType="annexure" id={"a"} direction="l"/>
                            <ContentNavigatorCard contentType="annexure" id={"c"} direction="r"/>
                        </> : 
                        ""
                    }

                    {
                        (id! === "c") ? 
                        <>
                            <ContentNavigatorCard contentType="annexure" id={"b"} direction="l"/>
                            <ContentNavigatorCard contentType="annexure" id={"d"} direction="r"/>
                        </> : 
                        ""
                    }

                    {
                        (id! === "d") ? 
                        <>
                            <ContentNavigatorCard contentType="annexure" id={"c"} direction="l"/>
                        </> : 
                        ""
                    }
                </div>
            </Container>

            <Footer />
        </>
    )
}

// function that returns the subsections of a specific section in the annexure
function FilterAnnexureSubsections(annexure: FullAnnexure, sectionID: number): AnnexureSubsections[] | null
{
    // if there are subsections and they aren't empty
    if (annexure.annexureSubsections && annexure.annexureSubsections.length > 0)
    {
        // return the subsections by sectionID
        return annexure.annexureSubsections.filter((section) => section.sectionID === sectionID);
    }
    else
    {
        // otherwise return null
        return null;
    }
}