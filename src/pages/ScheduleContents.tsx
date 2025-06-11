import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import type { ScheduleFourFive, ScheduleOne, ScheduleOneA, ScheduleSeven, ScheduleSix, ScheduleThree, ScheduleTwo } from "../types/Schedules";
import Loading from "../components/Loading";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import { getScheduleByNumber } from "../api/ScheduleAPI";

export default function ScheduleContents() 
{
    // get the schedule id from the URL parameters
    const {id} =  useParams();

    // Change the title in the browser tab
    document.title = `KYC1996: Schedule ${id!.toUpperCase()}`;

    // Use the useState hook to create state variables for loading and the schedule's contents
    const [loading, setLoading] = useState(true);
    const [schedule, setSchedule] = useState<ScheduleOne[] | ScheduleTwo | ScheduleOneA[] | ScheduleThree | ScheduleFourFive[] | ScheduleSix | ScheduleSeven[] | null>(null);

    const numsToWords = {
        "1": "one",
        "1a": "one/a",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven"
    }

    useEffect(() => {
        // async function that gets the schedule by number
        async function fetchSchedule() {
            if (id) {
                const data: ScheduleOne[] | ScheduleTwo | ScheduleOneA[] | ScheduleThree | ScheduleFourFive[] | ScheduleSix | 
                ScheduleSeven[] | null = await getScheduleByNumber(numsToWords[id]);
                
                setSchedule(data);
            }
            setLoading(false);
        }

        fetchSchedule();
    });

    return (
        <>
            <Header />

            <Container>
                <PageTitle title={`Schedule ${id!.toUpperCase()}`} />

                {loading && (
                    <Loading />
                )}

                {/* {!loading && schedule && (

                )} */}

                {/* {!loading && (!schedule || schedule) && (

                )} */}
            </Container>

            <Footer />
        </>
    )
}