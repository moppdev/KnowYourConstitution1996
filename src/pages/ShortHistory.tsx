import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import QueueImage from "../assets/voting.jpg";
import PageTitle from "../components/PageTitle";
import HeroAttribution from "../components/HeroAttribution";
import type { ImgInfo } from "../types/ImgInfo";
import { constitutionHistory } from "../types/History";
import HistoricalEventCard from "../components/HistoricalEventCard";
import SEO from "../components/SEO";
import { useEffect } from "react";

// The Short History page's TSX, displays a timeline of the creation of the Constitution
export default function ShortHistory()
{
    // Info for the Hero Image
    const imgInfo: ImgInfo = {
        "src": QueueImage,
        "alt": "Voters in 1994 queuing to vote in the first all-race democratic elections",
        "attribution": "Denis Farrell/Associated Press"
    };

    // Intersection Observer to add the "observed" class to each historical event card when it comes into view
    // This class will trigger a CSS animation that makes the card slide in from the left
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("observed");
            }
        });
    });

    useEffect(() => {
        const events = document.querySelectorAll(".observe");

        if (events.length > 0)
        {
            events.forEach((event) => {
                observer.observe(event);
            });
        }
    })

    return (
        <>
            <SEO
                description="A short history of the Constitution of South Africa, 1996, including key events leading to its adoption"
                keywords="constitution of south africa, 1996 constitution, south african democracy, apartheid, constitutional negotiations, constitutional assembly, interim constitution, codesa, mandela, democratic transition"
                title="KYC1996 | Short History of the Constitution"
            />
            <Header />
                <Container>
                    <HeroImage imgInfo={imgInfo} overlaidText={`“The Constitution as a whole, and particularly at its end, defines itself as a historic bridge between the 
                    past of a deeply divided society characterized by strife, conflict, untold suffering and injustice, and a future founded on the recognition of human rights, democracy, 
                        and peaceful co-existence and development opportunities for all South Africans, irrespective of colour, race, class, belief or sex.” 
                        - Constitutional Court of South Africa, Certification of the Constitution`}/>
                    <HeroAttribution description={imgInfo.alt} attribution={imgInfo.attribution}/>


                    <PageTitle title="A short history of the Constitution" />

                    <section id="history" className="grid gap-y-8 lg:gap-y-15 mx-5 md:mr-10 lg:mr-10 md:ml-12 lg:inline-block">
                        {
                            constitutionHistory && (
                                constitutionHistory.map((elem, index) => (
                                    <HistoricalEventCard key={index} historicalEvent={elem} />
                                ))
                            )
                        
                        }
                    </section>
                </Container>
            <Footer /> 
            
        </>
    )
}
