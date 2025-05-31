import { useEffect, useState } from 'react';
import { getPreamble } from '../api/MainAPI';
import Container from '../components/Container';
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage';
import SigningImage from "../assets/mandela-signing-document.jpg";

// This is the home page of the website
export default function Home() {
  // Change the title in the browser tab
  document.title = "KYC1996: Home";

  // Info for the Hero Image
  const imgInfo = {
    "src": SigningImage,
    "alt": "Nelson Mandela signs the 1996 Constitution into law with Cyril Ramaphosa in the background"
  };

  // Get the preamble to the Constitution
  // which will be the text for the Hero Image

  // Initialize state
  const [preamble, setPreamble] = useState("");

  // Use UseEffect to be able to run getPreamble() and set the preamble state variable
  useEffect(() => {
      // async function to call getPreamble and assign it via setPreamble
      async function fetchPreamble() {
        const data = await getPreamble();
        if (data) 
        {
          setPreamble(data.preambleContents);
        }
      }

    // run the async function
    fetchPreamble();
  }, []);

  return (
    <>
      <Header />

          <Container>
            <HeroImage imgInfo={imgInfo} overlaidText={`"${preamble}" - The Constitution's Preamble`}/>

            <h1>Welcome to KnowYourConstitution1996!</h1>
          </Container>

      <Footer /> 
    </>
  )
}
