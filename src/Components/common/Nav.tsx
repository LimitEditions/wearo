import React, { useContext, useEffect, useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { navContent } from "../../utils/navContent";
import { INavItem } from "../../types/NavContentType";
import { showEl } from "../../utils/showEl";
import AuthContext from "../../context/AuthProvider";

export const Nav: React.FC = memo(() => {
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();
    const [showNav, setShowNav] = useState<boolean>(true);
    const [data, setData] = useState<INavItem[]>([]);

    useEffect(() => {
        setShowNav(true);
        if (isAuth.type === "Admin" || isAuth.type === "SuperAdmin") {
            setData(navContent.Admin);
        } else if (
            isAuth.type === "BrandAdmin" ||
            isAuth.type === "BrandSeller"
        ) {
            setData(navContent.BrandAdmin);
        } else {
            setData(navContent.User);
        }

        setShowNav(
            !showEl(
                ["/auth", "/auth/login", "/auth/registration", '/posts/:id/comments'],
                location.pathname
            )
        );
    }, [isAuth, data, setData, location]);

    return (
        <>
            {showNav && (
                <nav className="fixed bottom-0 left-1/2 w-full h-auto z-20 
                                flex justify-between py-4 box-border border 
                                border-gray-300 rounded-t-md transform -translate-x-1/2 
                                bg-white-fon shadow-md">
                    {data.map((e) => {
                        return (
                            <Link
                                key={e.path}
                                to={e.path}
                                className="w-1/3"
                            >
                                {e.icon}
                            </Link>
                        );
                    })}
                </nav>
            )}
        </>
    );
});