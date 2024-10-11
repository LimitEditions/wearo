import React, { useContext, useEffect, useState, memo } from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { Link, useLocation } from "react-router-dom";
import { navContent } from "../../utils/navContent";
import { INavItem } from "../../types/NavContentType";
import { showEl } from "../../utils/showEl";
import AuthContext from "../../context/AuthProvider";
import { IconPromo } from "./icons/IconPromo";
import { IconPosts } from "./icons/IconPosts";
import { IconWardrobe } from "./icons/IconWardrobe";

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
                ["/auth", "/auth/login", "/auth/registration"],
                location.pathname
            )
        );
    }, [isAuth, data, setData, location]);

    return (
        <>
            {showNav && (
                <nav className={getStyles(navStyle)}>
                    {data.map((e) => {
                        return (
                            <Link
                                key={e.path}
                                to={e.path}
                                className={getStyles(linkStyle)}
                            >
                                <div className="w-5">
                                    {/* <e.component hoverColor="red" /> */}
                                    {/* <IconPosts hoverColor="#3447BC" />
                                    <IconPromo hoverColor="#3447BC" />
                                    <IconWardrobe hoverColor="#3447BC" /> */}
                                </div>
                                <div>{e.name}</div>
                            </Link>
                        );
                    })}
                </nav>
            )}
        </>
    );
});

const navStyle: BlockStyle = {
    blockSize: "fixed bottom-0 left-1/2 w-full h-auto z-20",
    container: "flex justify-between",
    spacing: "py-4",
    border: "box-border border border-gray-300 rounded-md",
    transitionsAnimation: "transform -translate-x-1/2",
    background: "bg-white-fon shadow-md",
};

const linkStyle: BlockStyle = {
    container: "w-1/3 flex flex-col items-center justify-between",
    spacing: "space-y-2 ",
    text: "text-xs text-[#9095B5] opacity-50",
    hover: "hover:opacity-100 hover:text-[#3447BC] ",
};
