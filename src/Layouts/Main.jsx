import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className=" mx-auto z-50">
                <div className="fixed w-full ">
                    <NavigationBar></NavigationBar>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
