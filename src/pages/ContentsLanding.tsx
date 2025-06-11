import { useEffect, useState } from "react";
import type { Chapter } from "../types/Main";
import { getChapters } from "../api/MainAPI";
import type { Annexure } from "../types/Annexures";
import { getAnnexures } from "../api/AnnexureAPI";
import type { Schedule } from "../types/Schedules";
import {getSchedules } from "../api/ScheduleAPI";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ConstitutionImage from "../assets/constitution-feature.jpg";
import PageTitle from "../components/PageTitle";
import HeroAttribution from "../components/HeroAttribution";
import ContentLandingCard from "../components/ContentLandingCard";

// This page acts as the index page for the contents of the Constitution
// It links to all the chapters, annexures, schedules and amendments of the Constitution
export default function ContentsLanding()
{
    // Change the title in the browser tab
    document.title = "KYC1996: Contents";

    // Info for the Hero Image
    const imgInfo = {
        "src": ConstitutionImage,
        "alt": "The hard-copy version of the Constitution laid on a table"
    };

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the sections
    const sectionClasses: string[] = ["pl-6", "pb-7", "md:pl-14"];
    const sectionClassString: string = sectionClasses.join(" ");

    // Use the useState hook to create state variables for chapters, annexures, amendments and schedules
    const [chapters, setChapters] =  useState<Chapter[] | null>(null);
    const [annexures, setAnnexures] =  useState<Annexure[] | null>(null);
    const [schedules, setSchedules] = useState<Schedule[] | null>(null);

    // Call the list of chapters and annexures from the API
    // change the state variables with useEffect
    useEffect(() => {
        // async function that gets the chapters
        async function fetchChapters()
        {
            const data: Chapter[] | null = await getChapters();
            setChapters(data);
        }

        // async function that gets the annexures
        async function fetchAnnexures()
        {
            const data: Annexure[] | null = await getAnnexures();
            setAnnexures(data);
        }        
        
        // async function that gets the schedules
        async function fetchSchedules()
        {
            const data: Schedule[] | null = await getSchedules();
            setSchedules(data);
        }

        fetchChapters();
        fetchAnnexures();
        fetchSchedules();
    }, [])

    return (
        <>
            <Header />
                <Container>

                    <HeroImage imgInfo={imgInfo} overlaidText='“The Republic of South Africa is one, sovereign, democratic state founded on the following values: Human dignity, the achievement of equality and the advancement of human rights and freedoms;
                        Non-racialism and non-sexism; Supremacy of the Constitution and the rule of law; Universal adult suffrage, a national common voters roll, regular elections and a multi-party system of democratic government, to ensure accountability, responsiveness and openness.”
                        - Section 1, Chapter 1: Founding Provisions' />
                    <HeroAttribution description={imgInfo.alt} attribution="Corruption Watch"/>

                    <PageTitle title="Contents of the Constitution" />


                    <section id="chapters" className={sectionClassString}>
                        <h2 className="text-2xl">Chapters</h2>
                        {
                            /* Display cards that will take the user to each chapter of the Constitution*/
                            chapters && (chapters.map((chapter) => 
                                    (
                                        (chapter.chapterID === 0 && chapter.chapterTitle === "Preamble" ?
                                            <ContentLandingCard key={chapter.chapterID} type="chapter" name={chapter.chapterTitle} link="/preamble"/>
                                         :                                            
                                            <ContentLandingCard type="chapter" key={chapter.chapterID} name={`Chapter ${chapter.chapterID}: ${chapter.chapterTitle}`} link={`/chapter/${chapter.chapterID}`}/>)
                                    )
                                )
                            )
                        }

                        {   
                            // If chapters is null or empty, display a message
                            (!chapters || chapters.length === 0) && (
                                <p>Something went wrong with retrieving the list of chapters</p>
                            )
                        }
                    </section>

                    <section id="schedules" className={sectionClassString}>
                        <h2 className="text-2xl">Schedules</h2>
                        {
                            /* Display cards that will take the user to each schedule of the Constitution*/
                            schedules && (schedules.map((schedule) =>                      
                                <ContentLandingCard type="schedule" key={schedule.scheduleID} name={`${schedule.scheduleTitle}`} 
                                link={`/schedule/${schedule.scheduleID.toLowerCase()}`}/>)
                            )
                        }

                        {   
                            // If schedules is null or empty, display a message
                            (!schedules || schedules.length === 0) && (
                                <p>Something went wrong with retrieving the list of schedules</p>
                            )
                        }
                    </section>

                    <section id="annexures" className={sectionClassString}>
                        <h2 className="text-2xl">Annexures</h2>
                        {
                            /* Display cards that will take the user to each annexure of the Constitution*/
                            annexures && (annexures.map((annexure) =>                      
                                <ContentLandingCard type="annexure" key={annexure.annexureID} name={`Annexure ${annexure.annexureID}: ${annexure.annexureTitle}`} 
                                link={`/annexure/${annexure.annexureID.toLowerCase()}`}/>)
                            )
                        }

                        {   
                            // If annexures is null or empty, display a message
                            (!annexures || annexures.length === 0) && (
                                <p>Something went wrong with retrieving the list of annexures</p>
                            )
                        }
                    </section>

                    <section id="amendments" className={sectionClassString}>
                        <h2 className="text-2xl">Amendments</h2>
                        {
                            /* Display cards that will take the user to amendments of the Constitution*/                 
                                <ContentLandingCard type="amendment" key="amendments"
                                name={`amendments`} 
                                link={`/amendments`}/>
                        }
                    </section>

                </Container>
            <Footer />
        </>
    )
}