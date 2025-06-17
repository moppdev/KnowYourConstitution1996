import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import type { FullAnnexure } from "../types/Annexures";
import { getAnnexureByLetter } from "../api/AnnexureAPI";

export default function AnnexureContents() 
{
    // get the schedule id from the URL parameters
    const {id} =  useParams();

    // Change the title in the browser tab
    document.title = `KYC1996: Annexure ${id!.toUpperCase()}`;

    // Use the useState hook to create state variables for loading and the schedule's contents
    const [loading, setLoading] = useState(true);
    const [annexure, setAnnexures] = useState<FullAnnexure | null>(null);
    

    useEffect(() => {
        // Scroll to top on arrival implementation
        window.scrollTo(0, 0);
        
        // async function that gets the schedule by number
        async function fetchSchedule() {
            if (id) {
                const data: FullAnnexure | null = await getAnnexureByLetter(id.toUpperCase() as "A" | "B" | "C" | "D");
                setAnnexures(data);
            }
            setLoading(false);
        }

        fetchSchedule();
    });

    return (
        <>
            <Header />

            <Container>
                {loading && (
                    <Loading />
                )}

                {!loading && annexure && (
                    <PageTitle title={`Annexure ${id!.toUpperCase()} - ${annexure!.annexureTitle}`} />
                )}

                {/* {!loading && !annexure && (

                )} */}
            </Container>

            <Footer />
        </>
    )
}