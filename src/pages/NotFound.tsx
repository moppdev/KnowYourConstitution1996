import { NavLink, useLocation } from "react-router";

// This component is used to display a 404 Not Found page when the user navigates to an invalid route
export default function NotFound()
{
    const location = useLocation();
    
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="text-center">
                <h1 className="text-[3em]">404: Not Found</h1>

                <p className="text-2xl">Invalid route: {location.pathname}</p>

                <div className="mt-7 underline text-(--border-link-button) hover:text-(--header-footer-nav)">
                    <NavLink to="/">
                        Let's go home
                    </NavLink>
                </div>
            </div>
        </div>
    )
}