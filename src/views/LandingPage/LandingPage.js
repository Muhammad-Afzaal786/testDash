import React from "react";
import Booking from "../../Components/Booking";
import ChooseUs from "../../Components/ChooseUs";
import "../../Components/global.css";
import HowItWorks from "../../Components/HowItWorks";
import MainBody from "../../Components/MainBody";
import NewsLetter from "../../Components/NewsLetter";
import Services from "../../Components/Services";

export default function LandingPage() {
    // main return
    return (
        <div>
            <MainBody />
            <Services />
            <ChooseUs />
            <HowItWorks />
            <Booking />
            <NewsLetter />
        </div>
    );
}
