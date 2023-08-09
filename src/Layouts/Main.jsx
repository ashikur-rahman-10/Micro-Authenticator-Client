import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-slate-900">
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
