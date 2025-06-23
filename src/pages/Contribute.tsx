import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SpeakImage from "../assets/ca.jpg";
import PageTitle from "../components/PageTitle";
import HeroAttribution from "../components/HeroAttribution";
import ContributingCard from "../components/ContributingCard";
import type { ImgInfo } from "../types/ImgInfo";

// The Contribute page shows users how they could contribute to the website or API if they want to
export default function Contribute()
{
    // Change the title in the browser tab
    document.title = "KYC1996 | Contributions";

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // classes for the container containing the ContributionCards
    const cardHolderClasses: string[] = ["flex", "gap-2", "min-[500px]:gap-5", "justify-center", "lg:justify-start", "lg:ml-14", "flex-wrap", "py-10"];
    const cardHolderClassString: string = cardHolderClasses.join(" ");

    // classes for the tech stack lists
    const listClasses: string[] = ["list-disc", "pl-6"];
    const listClassesString: string = listClasses.join(" ");

    // classes for the container containing the tech stack lists
    const techStackClasses: string[] = ["mb-7", "flex", "gap-2", "md:gap-10", "flex-wrap"];
    const techStackClassString: string = techStackClasses.join(" ");

    // classes for the website stack card
    const websiteStackClasses: string[] = ["rounded-lg", "border-1", "border-(--border-link-button)", "p-3", "bg-(--header-footer-nav-text)", "pr-19", "drop-shadow-lg"];
    const websiteStackClassString: string = websiteStackClasses.join(" ");

    // classes for the api stack card
    const apiStackClasses: string[] = ["rounded-lg", "border-1", "border-(--border-link-button)", "p-3", "bg-(--header-footer-nav)", "text-(--background-color)", "drop-shadow-lg"];
    const apiStackClassString: string = apiStackClasses.join(" ");

    // Info for the Hero Image
    const imgInfo: ImgInfo = {
        "src": SpeakImage,
        "alt": "Member of the Constitutional Assembly speaking",
        "attribution": "Subash Jeram / Constitutional Assembly"
    };

    // return the page
    return (
        <>
            <Header />
                <Container>
    
                    <HeroImage imgInfo={imgInfo} overlaidText='"The resilience of our people and their determination to be free defies all odds: 
                    it is an unshakeable belief in democracy and non-racialism which motivates them to forge ahead." - Message from the Youth Leadership issued from underground 
                    by South African Youth Congress (SAYCO)'/>
                    <HeroAttribution description={imgInfo.alt} attribution={imgInfo.attribution} />

                    <PageTitle title="Contributing" />

                    <div id="contribute-text" className="mx-4 md:mx-14">
                        <p className="mb-4 font-bold">
                            Feeling contribut-y? Well, have I got the page for you!
                        </p>
                        <p className="mb-4">
                            This website is completely free and open-source, and the API (where all the data comes from) which this website uses is also free and open-source. 
                            So if there's some content you think should be added, perhaps a change to the Constitution you know of, or there's a bug that you've spotted, feel free to contribute!
                        </p>
                        <p className="mb-6">
                            Here are the tech stacks used in the website and API:
                        </p>
                        <div id="tech-stacks" className={techStackClassString}>
                            <div id="ts-website" className={websiteStackClassString}>
                                <p className="border-b-2">Website</p>
                                <ul className={listClassesString}>
                                    <li>Vite</li>
                                    <li>React</li>
                                    <li>React Router</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                            <div id="ts-api" className={apiStackClassString}>
                                <p className="border-b-2 w-2/3">API</p>
                                <ul className={listClassesString}> 
                                    <li>C#</li>
                                    <li>ASP.NET Core Web API</li>
                                    <li>T-SQL</li>
                                    <li>Entity Framework Core</li>
                                    <li>Serilog</li>
                                    <li>Swagger</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            To get started, click/touch either of the cards below, which will take you to each GitHub repository, to contribute to the website or API.
                        </p>
                    </div>

                    <div id="contributing-card-holder" className={cardHolderClassString}> 
                        <ContributingCard cardType={"website"} />
                        <ContributingCard cardType={"api"} />
                    </div>
                </Container>
            <Footer />
        </>
    )
}