import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ConstitutionImage from "../assets/constitution-feature.jpg";

export default function ContentsLanding()
{
    // Info for the Hero Image
    const imgInfo = {
        "src": ConstitutionImage,
        "alt": "The hard-copy version of the Constitution laid on a table"
    };

    return (
        <>
            <Header />
                <Container>
                    <HeroImage imgInfo={imgInfo} overlaidText='“The Republic of South Africa is one, sovereign, democratic state founded on the following values: Human dignity, the achievement of equality and the advancement of human rights and freedoms;
                        Non-racialism and non-sexism; Supremacy of the Constitution and the rule of law; Universal adult suffrage, a national common voters roll, regular elections and a multi-party system of democratic government, to ensure accountability, responsiveness and openness.”
                        - Section 1, Chapter 1: Founding Provisions of the Constitution' />

                    
                </Container>
            <Footer />
        </>
    )
}