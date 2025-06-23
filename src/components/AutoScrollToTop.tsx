import { useEffect } from "react";
import { useLocation } from "react-router";

// Allows the page to scroll to the top when entering a new page
export default function AutoScrollToTop()
{
    // get current location/route
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Optional: 'auto' for instant scroll, 'smooth' for animated scroll
        });
    }, [pathname]);

    // return null, otherwise you can't use it in the JSX of main.tsx
    return null;
}