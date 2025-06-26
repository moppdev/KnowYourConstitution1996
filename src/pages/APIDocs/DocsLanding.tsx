import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DocsContainer from "./DocsContainer";
import DesktopDocsNav from "./DesktopDocsNav";

export default function DocsLanding()
{
    // This component acts as the layout page/template for the API documentation
        return (
        <>
            <Header />
                <DocsContainer>
                    <DesktopDocsNav />
                    <Outlet />
                </DocsContainer>
            <Footer />
        </>
    )
}