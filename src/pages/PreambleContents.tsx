import { useEffect, useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Loading from "../components/Loading";
import type { Preamble } from "../types/Main";
import { getPreamble } from "../api/MainAPI";
import BackToContents from "../components/BackToContents";

export default function PreambleContents()
{
    // Change the title in the browser tab
    document.title = "KYC1996 | Preamble";

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the preamble container
    const preambleClasses: string[] = ["text-left", "text-xl", "mx-10", "pl-4"];
    const preambleClassString: string = preambleClasses.join(" ");

    // classes for each line of the preamble
    const lineClasses: string[] = ["pb-6"];
    const lineClassString: string = lineClasses.join(" ");

    // state variables for the preamble and loading sentinel variable
    const [preamble, setPreamble] = useState<Preamble | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect hook to fetch the preamble from the API
    useEffect(() => {
         // Scroll to top on arrival implementation
        window.scrollTo(0, 0);

        //async function that gets the preamble
        async function fetchAmendments()
        {
            // get the preamble from the API
            // set loading to false when complete
            // if the preamble is null, it is handled in the returned JSX
            const data: Preamble | null = await getPreamble();
            setPreamble(data);
            setLoading(false);
        }

        fetchAmendments();
    }, [])

    return (
        <>
            <Header />
                <Container>
                    <BackToContents />
                    <PageTitle title={`Preamble to the Constitution`} />

                    { !loading && preamble && (
                            <div id="preamble-contents" className={preambleClassString}>
                                {
                                    /* Split the preamble by ";" and return each line as a p element */
                                    (preamble.preambleContents.split(";").map((line) => (
                                        <p className={lineClassString}>{line}</p>
                                    )))
                                }
                            </div>
                        )
                    }

                    {loading && (
                        <Loading />
                    )}

                    {!loading && !preamble && (
                        <p>Something went wrong with retrieving the preamble.</p>
                    )}

                </Container>
            <Footer />
        </>
    )
}