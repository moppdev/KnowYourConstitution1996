import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useMemo, useState } from "react";
import type { ScheduleFourFive, ScheduleOne, ScheduleOneA, ScheduleSeven, ScheduleSix, ScheduleThree, ScheduleTwo } from "../types/Schedules";
import Loading from "../components/Loading";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import { getScheduleByNumber, getSchedules } from "../api/ScheduleAPI";
import BackToContents from "../components/BackToContents";
import ContentNavigatorCard from "../components/ContentNavigatorCard";
import ScheduleTwoDisplay from "../components/schedules/ScheduleTwo";
import ScheduleSixDisplay from "../components/schedules/ScheduleSix";
import ScheduleThreeDisplay from "../components/schedules/ScheduleThree";
import ScheduleSevenDisplay from "../components/schedules/ScheduleSeven";
import SEO from "../components/SEO";

export default function ScheduleContents() 
{
    // get the schedule id from the URL parameters
    const {id} =  useParams();

    // Use the useState hook to create state variables for loading and the schedule's contents
    const [loading, setLoading] = useState(true);
    const [schedule, setSchedule] = useState<ScheduleOne[] | ScheduleTwo | ScheduleOneA[] | ScheduleThree | ScheduleFourFive[] | ScheduleSix | ScheduleSeven[] | null>(null);
    const [scheduleTitle, setScheduleTitle] = useState<string | null>(null);

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for the bottom navigation
    const nextClasses: string[] = ["flex", "sm:flex-row", "flex-col", "justify-between", "sm:items-center"];
    const nextClassString: string = nextClasses.join(" ");

    // classes for each section
    const sectionContainer: string[] = ["mx-4", "md:mx-13", "py-5"];
    const sectionContainerClassString: string = sectionContainer.join(" ");

        // object to route ids from number to word format for the API
        const numsToWords = useMemo(() => ({
            "1": "one",
            "1a": "one/a",
            "2": "two",
            "3": "three",
            "4": "four",
            "5": "five",
            "6": "six",
            "7": "seven"
        }), []);

    useEffect(() => {
        // async function that gets the schedule by number
        async function fetchSchedule() {
            if (id) {
                const schedules = await getSchedules();
                
                const filtered = schedules?.filter((schedule) => {
                    return schedule.scheduleID == id.toUpperCase()
                })

                setScheduleTitle(filtered![0].scheduleTitle);

                const wordId = numsToWords[id as keyof typeof numsToWords];
                if (wordId) {
                    const data: ScheduleOne[] | ScheduleTwo | ScheduleOneA[] | ScheduleThree | ScheduleFourFive[] | ScheduleSix | 
                    ScheduleSeven[] | null = await getScheduleByNumber(wordId as Parameters<typeof getScheduleByNumber>[0]);
                    setSchedule(data);
                }
            }
            setLoading(false);
        }

        fetchSchedule();
    }, [id, numsToWords]);



    return (
        <>
            <SEO 
                title={`KYC1996 | Schedule ${id!.toUpperCase()}`}
                description="Contents of the Schedules in the south africa constitution, 1996, including the text of each schedule and its parts."
                keywords={`schedule ${id}, constitution schedule ${id}, south africa constitution schedule, 1996 constitution schedule, legal schedules south africa, annexure south africa, schedule text, schedule ${id} south africa, south africa constitutional law, kyc1996`}
            />
            <Header />

            <Container>
                <BackToContents />
                <PageTitle title={`${scheduleTitle}`} />

                {loading && (
                    <Loading />
                )}
                
                <section id={`schedule-${id}-content`} className={sectionContainerClassString}>
                    {!loading && schedule && (
                        // Schedules 1, 1A, 4, 5, 7 use only 1D arrays
                            Array.isArray(schedule) ? (
                                <>
                                    {schedule.map((section, index) => {
                                        // schedule 1 content
                                        if ('sectionID' in section) {
                                            return (
                                                <p className="py-4" key={section.sectionID}>
                                                    <span>{`${section.sectionID})  `}</span>
                                                    <span>{section.sectionText}</span>
                                                </p>
                                            );
                                        }

                                        // schedule 1A content
                                        if ('province' in section) {
                                            return (
                                                <>
                                                    <div className="py-4" key={section.province}>
                                                        <h2 className="py-4">
                                                            <span className="italic underline text-xl">{`${section.province}`}</span>
                                                        </h2>
                                                        <ul className="list-none mt-2">
                                                            {
                                                                section.mapCSV.split(";").map((map) => (
                                                                    <li key={`${section.province}-${map}`}>{map}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </>
                                            );
                                        }

                                        // schedule 4 and 5 content
                                        if ("partID" in section)
                                        {
                                            return (
                                                <>
                                                    <div className="py-4">
                                                        <h2 className="py-4" id={`section-${section.partID}-desc`}>
                                                            <span className="italic underline text-xl">{`Part ${section.partID}`}</span>
                                                        </h2>
                                                        <ul className="list-none mt-2">
                                                            {
                                                                section.partCSV.split(";").map((map) => (
                                                                    <li key={`${section.partID}-${map}`}>{map}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </>
                                            )
                                        }

                                         if ("actNum" in section && index === schedule.length - 1) {
                                            return <ScheduleSevenDisplay schedule={schedule as ScheduleSeven[]} />
                                         }
                                    })}

                                    
                                       

                                    
                                </>
                            ) :
                            (
                                // Display schedules that aren't made up of a single array, Schedules 2, 3, 6
                                <>
                                    {
                                        "scheduleTwo_Oaths" in schedule && (
                                            <ScheduleTwoDisplay schedule={schedule as ScheduleTwo} />
                                        ) ||

                                         "electionProcedures" in schedule && (
                                            <ScheduleThreeDisplay schedule={schedule as ScheduleThree} />
                                        ) ||

                                        "transitionalArrangements" in schedule && (
                                            <ScheduleSixDisplay schedule={schedule as ScheduleSix} />
                                        ) 
                                    }
                                </>
                            )
                        )
                    }

                    {!loading && (!schedule) && (
                        <p>Something went wrong with retrieving the contents of Schedule {id!.toUpperCase()}</p>
                    )}
                </section>

                {/* navigation between schedules */}
                <div id="next-options" className={nextClassString}>
                    {
                        (id! === "1") ? 
                        <ContentNavigatorCard contentType="schedule" id={"1a"} direction="r"/> : 
                        ""
                    }

                    {
                        (id! === "1a") ? 
                        <>
                            <ContentNavigatorCard contentType="schedule" id={"1"} direction="l"/>
                            <ContentNavigatorCard contentType="schedule" id={"2"} direction="r"/>
                        </> : 
                        ""
                    }

                    {
                        (id! === "2") ? 
                        <>
                            <ContentNavigatorCard contentType="schedule" id={"1a"} direction="l"/>
                            <ContentNavigatorCard contentType="schedule" id={"3"} direction="r"/>
                        </> : 
                        ""
                    }

                    {
                        (parseInt(id!) >= 3 && parseInt(id!) <= 6) ? 
                        <>
                            <ContentNavigatorCard contentType="schedule" id={(parseInt(id!) - 1).toString()} direction="l"/>
                            <ContentNavigatorCard contentType="schedule" id={(parseInt(id!) + 1).toString()} direction="r"/>
                        </> : 
                        ""
                    }

                    {
                        (id! === "7") ? 
                        <>
                            <ContentNavigatorCard contentType="schedule" id={(parseInt(id!) - 1).toString()} direction="l"/>
                        </> : 
                        ""
                    }
                </div>
            </Container>

            <Footer />
        </>
    )
}