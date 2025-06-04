import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ConstitutionImage from "../assets/constitution-feature.jpg";
import PageTitle from "../components/PageTitle";
import HeroAttribution from "../components/HeroAttribution";
import { useEffect, useState } from "react";
import type { Chapter } from "../types/Main";
import { getChapters } from "../api/MainAPI";
import type { Annexure } from "../types/Annexures";
import { getAnnexures } from "../api/AnnexureAPI";
import type { Schedule } from "../types/Schedules";

export default function ContentsLanding()
{
    // Info for the Hero Image
    const imgInfo = {
        "src": ConstitutionImage,
        "alt": "The hard-copy version of the Constitution laid on a table"
    };

    const sectionClasses: string[] = ["pl-6", "md:pl-14"];
    const sectionClassString: string = sectionClasses.join(" ");

    const [chapters, setChapters] =  useState<Chapter[] | null>(null);
    const [annexures, setAnnexures] =  useState<Annexure[] | null>(null);
    const schedules: Schedule[] = [
        { scheduleNumber: "1", title: "Schedule 1: National Flag" },
        { scheduleNumber: "1A", title: "Schedule 1A: Geographical Areas of Provinces" },
        { scheduleNumber: "2", title: "Schedule 2: Oaths and Solemn Affirmations" },
        { scheduleNumber: "3", title: "Schedule 3: Election Procedures" },
        { scheduleNumber: "4", title: "Schedule 4: Functional Areas of Concurrent National and Provincial Legislative Competence" },
        { scheduleNumber: "5", title: "Schedule 5: Functional Areas of Exclusive Provincial Legislative Competence" },
        { scheduleNumber: "6", title: "Schedule 6: Transitional Arrangements" },
        { scheduleNumber: "7", title: "Schedule 7: Laws Repealed" }
    ];

    // Call the list of chapters and annexures from the API
    // change the state variables with useEffect
    useEffect(() => {
        // async function that gets the Chapters
        async function fetchChapters()
        {
            const data: Chapter[] | null = await getChapters();
            if (data) 
            {
                setChapters(data);
            }
        }

        // async function that gets the annexures
        async function fetchAnnexures()
        {
            const data: Annexure[] | null = await getAnnexures();
            if (data) 
            {
                setAnnexures(data);
            }
        }

        fetchChapters();
        fetchAnnexures();
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
                        {/* {chapters && chapters.length > 0 && (
                            chapters.map((elem) => (
                                (elem.chapterID == 0) ?
                                (
                                    <div key={elem.chapterID}>
                                        {elem.chapterTitle}
                                    </div>
                                ) : (
                                    <div key={elem.chapterID}>
                                        Chapter {elem.chapterID} - {elem.chapterTitle}
                                    </div>  
                                )
                            ))
                        )} */}
                    </section>

                    <section id="annexures" className={sectionClassString}>
                        <h2 className="text-2xl">Annexures</h2>
                        {/* {annexures && annexures.length > 0 && (
                            annexures.map((elem) => (
                                    <div key={elem.annexureID}>
                                        Annexure {elem.annexureID} - {elem.annexureTitle}
                                    </div>
                            ))
                        )} */}
                    </section>

                    <section id="schedules" className={sectionClassString}>
                        <h2 className="text-2xl">Schedules</h2>
                    </section>

                </Container>
            <Footer />
        </>
    )
}