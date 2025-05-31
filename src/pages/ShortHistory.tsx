import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import QueueImage from "../assets/voting.jpg";

// The Short History page's TSX, displays a timeline of the creation of the Constitution
export default function ShortHistory()
{
      // Info for the Hero Image
    const imgInfo = {
        "src": QueueImage,
        "alt": "Voters in 1994 queuing to vote in the first all-race democratic elections"
    };

    return (
        <>

            <Header />
                <Container>
                    <HeroImage imgInfo={imgInfo} overlaidText={`“The Constitution as a whole, and particularly at its end, defines itself as a historic bridge between the 
                    past of a deeply divided society characterized by strife, conflict, untold suffering and injustice, and a future founded on the recognition of human rights, democracy, 
                        and peaceful co-existence and development opportunities for all South Africans, irrespective of colour, race, class, belief or sex.” 
                        - Constitutional Court of South Africa, Certification of the Constitution`}/>

                    
                </Container>
            <Footer /> 
            
        </>
    )
}