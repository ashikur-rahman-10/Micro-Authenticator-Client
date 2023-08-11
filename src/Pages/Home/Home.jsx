import React from "react";
import TopBanner from "./TopBanner/TopBanner";
import Solutions from "./Solutions/Solutions";
import BottomBanner from "./BottomBanner/BottomBanner";
import PrinctingSection from "./PricingSection/PrinctingSection";

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <PrinctingSection></PrinctingSection>
            <Solutions></Solutions>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;
