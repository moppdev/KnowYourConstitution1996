import { useEffect, useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import type { Amendment } from "../types/Amendment";
import getAmendments from "../api/AmendmentAPI";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import BackToContents from "../components/BackToContents";

export default function AmendmentsContents()
{
    // Change the title in the browser tab
    document.title = "KYC1996 | Amendments";

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // Classes for the table
    const tableClasses: string[] = ["table-auto", "border-collapse", "border-3", "border-(--text)", "max-[340px]:mx-0", "max-[639px]:mx-5", "sm:mx-10", "mb-8", "lg:mb-6"];
    const tableClassString: string = tableClasses.join(" ");    
    
    // Classes for the table headings and cells
    const tableHeadingClasses: string[] = ["border-3", "border-(--text)", "p-2", "bg-(--header-footer-nav)", "text-(--header-footer-nav-text)"];
    const headingClassString: string = tableHeadingClasses.join(" ");    
    
    const tableCellClasses: string[] = ["border", "border-(--text)", "p-2", "max-[420px]:p-1"];
    const cellClassString: string = tableCellClasses.join(" ");

    // state variables for the amendments and loading sentinel variable
    const [amendments, setAmendments] = useState<Amendment[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect hook to fetch the amendments from the API
    useEffect(() => {
        //async function that gets the amendments
        async function fetchAmendments()
        {
            // get the amendments from the API
            // set loading to false when complete
            // if amendments are null, it is handled in the returned JSX
            const data: Amendment[] | null = await getAmendments();
            setAmendments(data);
            setLoading(false);
        }

        fetchAmendments();
    }, [])

    return (
        <>
            <Header />
                <Container>
                    <BackToContents />
                    <PageTitle title={`Amendments to the Constitution`} />

                    { !loading && amendments && amendments.length > 0 && (
                            <table className={tableClassString}>
                                <caption className="caption-top">
                                    The table below contains a list of all the amendments to the Constitution of South Africa, 1996. - <FontAwesomeIcon icon={faCopyright} /> Juta
                                </caption>
                                <thead>
                                    <tr key={"amendment-table-header"}>
                                        <th className={headingClassString}>Amendment Name</th>
                                        <th className={headingClassString}>Date of Effect</th>
                                        <th className={headingClassString}>Reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {amendments.map((amendment) => (
                                        <tr key={amendment.amendmentTitle}>
                                            <td className={cellClassString}>{amendment.amendmentTitle}</td>
                                            <td className={cellClassString}>{new Date(amendment.dateOfEffect).toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"})}</td>
                                            <td className={cellClassString}>{amendment.reference}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }

                    {loading && (
                        <Loading />
                    )}

                    {!loading && (!amendments || amendments.length === 0) && (
                        <p>Something went wrong with retrieving the list of amendments.</p>
                    )}

                </Container>
            <Footer />
        </>
    )
}