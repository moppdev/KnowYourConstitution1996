import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SpeakImage from "../assets/ca.jpg";

// The Contribute page shows users how they could contribute to the website or API if they want to
export default function Contribute()
{
    // Info for the Hero Image
    const imgInfo = {
        "src": SpeakImage,
        "alt": "Member of the Constitutional Assembly speaking"
    };

    

    return (
        <>
            <Header />
                <Container>
    
                    <HeroImage imgInfo={imgInfo} overlaidText='"The resilience of our people and their determination to be free defies all odds: 
                    it is an unshakeable belief in democracy and non-racialism which motivates them to forge ahead." - Message from the Youth Leadership issued from underground 
                    by South African Youth Congress (SAYCO)'/>


                </Container>
            <Footer />
        </>
    )
}