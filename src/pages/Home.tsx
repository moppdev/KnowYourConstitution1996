import Container from '../components/Container';
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage';
import SigningImage from "../assets/desktop-imgs/mandela-signing-document.jpg";
import SigningImageMobile from "../assets/mobile-imgs/mandela-signing-document-mobile.jpg";
import SigningImageTablet from "../assets/tablet-imgs/mandela-signing-document-tablet.jpg";
import PageTitle from '../components/PageTitle';
import HeroAttribution from '../components/HeroAttribution';
import DidYouKnow from '../components/DidYouKnow';
import Search from '../components/Search';
import FAQ from '../components/FAQ';
import type { ImgInfo } from '../types/ImgInfo';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';

// This is the home page of the website's TSX
export default function Home() {

    // change images used based on the screen size
    const [src, setSrc] = useState<string>(SigningImageMobile);
    const width = window.innerWidth;

    useEffect(() => {
        if (width > 640 && width < 768)
        {
            setSrc(SigningImageTablet);
        }
        else if (width >= 768)
        {
            setSrc(SigningImage);
        }
    }, [width])

  // Info for the Hero Image
  const imgInfo: ImgInfo = {
    "src": src,
    "alt": "Nelson Mandela signs the 1996 Constitution into law with Cyril Ramaphosa in the background",
    "attribution": "Adil Bradlow/AFP"
  };

  // Get the preamble to the Constitution
  // which will be the text for the Hero Image

  // A quote from the preamble for the hero image
  const preamble: string = `We, the people of South Africa, Recognise the injustices of our past; Honour those who suffered for justice and freedom in our land; 
    Respect those who have worked to build and develop our country; and Believe that South Africa belongs to all who live in it, united in our diversity. We therefore, 
    through our freely elected representatives, adopt this Constitution as the supreme law of the Republic`;
  
  // return the page
  return (
    <>
      <SEO 
        title="KYC1996 | Explore South Africa's Rights & Freedoms"
        description="Mine. Yours. Ours. Our rights and freedoms enshrined. Explore South Africa's 1996 Constitution in an accessible, searchable format."
        keywords="south african constitution, constitution of south africa, constitution of republic of south africa, 1996 constitution south africa, bill of rights south africa, south africa constitution pdf, know your constitution, section 25 constitution, open source, kyc1996"
      />

      <Header />

          <Container>
            
            <HeroImage imgInfo={imgInfo} overlaidText={`"${preamble}..." - A quote from the Constitution's Preamble`}/>
            <HeroAttribution description={imgInfo.alt} attribution={imgInfo.attribution}/>

            <PageTitle title="Mine. Yours. Ours. Our rights and freedoms enshrined."/>

            <h3 className="text-xl mx-5 md:mr-40 lg:mr-60 md:ml-12">Welcome to KnowYourConstitution1996 (KYC1996)!</h3>

            <p className="mx-5 md:mx-12 my-5">
              This open-source website provides easy access to the full text of South Africa's current Constitution. 

              Here's a cool fact about the Constitution:
            </p>

            <DidYouKnow />

            <hr className='mx-8 mt-4 text--(-text) opacity-40'/>

            <Search />
            <hr className='mx-8 mt-4 text--(-text) opacity-40'/>

            <FAQ />

          </Container>

      <Footer /> 
    </>
  )
}
