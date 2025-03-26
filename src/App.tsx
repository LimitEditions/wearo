import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./Components/common/Nav";
import { Logo } from "./Components/common/Logo";
import AnimatedWrapper from "./animation/AnimatedWrapper";
import { endPoints } from "./utils/endPoints";
import { Page404 } from "./Components/common/Page404";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FooterApp } from './Components/common/FooterApp';

function App() {
    const location = useLocation();
    const nav = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") {
            nav("/posts");
        }
    }, []);

    return (
        <div className="relative overflow-hidden min-h-screen font-sf-pro bg-white-fon flex flex-col max-h-screen">
            <Logo />
            <div className='h-screen flex flex-col justify-between overflow-y-auto scrollbar-hide'>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        {endPoints.map((endPoint) => {
                            return (
                                <Route
                                    key={endPoint.path}
                                    path={endPoint.path}
                                    element={
                                        <AnimatedWrapper>
                                            <endPoint.component />
                                        </AnimatedWrapper>
                                    }
                                />
                            );
                        })}
                        <Route
                            path="*"
                            element={
                                <AnimatedWrapper>
                                    <Page404 />
                                </AnimatedWrapper>
                            }
                        />
                    </Routes>
                </AnimatePresence>
                <FooterApp />
            </div>
            <Nav />
        </div>
    );
}

export default App;
