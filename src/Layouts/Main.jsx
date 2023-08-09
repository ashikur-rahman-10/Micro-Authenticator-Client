import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="fixed w-full max-w-6xl z-20">
                <NavigationBar></NavigationBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
