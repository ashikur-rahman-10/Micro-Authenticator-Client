import React from "react";
import TopBanner from "./TopBanner/TopBanner";
import Solutions from "./Solutions/Solutions";
import BottomBanner from "./BottomBanner/BottomBanner";
import PrinctingSection from "./PricingSection/PrinctingSection";
import Subscribe from "./Subcribe/Subscribe";
import { Helmet } from "react-helmet-async";
import Review from "./Review/Review";

const Home = () => {
    // Scroll to top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div>
            <Helmet>
                <title>Micro | Home</title>
            </Helmet>
            <TopBanner></TopBanner>
            <PrinctingSection></PrinctingSection>
            <Solutions></Solutions>
            <Review></Review>
            <BottomBanner></BottomBanner>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;
