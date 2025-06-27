import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DocsContainer from "./DocsContainer";
import DesktopDocsNav from "./DesktopDocsNav";
import NavFAB from "./NavFAB";
import { useState } from "react";
import MobileDocsNav from "./MobileDocsNav";

export default function DocsLanding()
{
    // state variables to determine the visibility and render state of the mobile nav
    const[visible, setVisible] = useState(false);
    const [shouldRenderMobileNav, setShouldRenderMobileNav] = useState(false);

    // function that handles the toggling of the mobile nav
    function handleNavMenu()
    {
        // When the "hamburger button" is clicked and...

        // if it's not visible
        if (!visible) {
            // let the component render, block scrolling of the background, make the menu visible and run the animation
            setShouldRenderMobileNav(true);
            setVisible(true);
        } else {
            // if it's visible
            // remove the component after 500ms, during removal reenable scrolling of the background, make the menu invisible and run the animation
            setVisible(false);
            const timeout = setTimeout(() => setShouldRenderMobileNav(false), 500);
            clearTimeout(timeout);
        }
    }

    // This component acts as the layout page/template for the API documentation
        return (
        <>
            <Header />
                <DocsContainer>
                    <DesktopDocsNav />
                    <NavFAB onClick={handleNavMenu}/>
                    {shouldRenderMobileNav && (
                            <MobileDocsNav isVisible={visible} handleNavMenu={handleNavMenu} />
                    )}
                    <Outlet />
                </DocsContainer>
            <Footer />
        </>
    )
}