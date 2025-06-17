import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import { useEffect } from "react";

export default function DocsLanding()
{
    // Change the title in the browser tab
    document.title = "KYC1996: API Documentation";

    useEffect(() => {
        // Scroll to top on arrival implementation
        window.scrollTo(0, 0);
    })

    // This page acts as the landing page for the API documentation
        return (
        <>
            <Header />

                <PageTitle title="API Documentation" />

                <Outlet />

            <Footer />
        </>
    )
}