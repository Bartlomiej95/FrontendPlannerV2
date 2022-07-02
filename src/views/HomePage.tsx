import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header/Header";
import {Banner} from "../organisms/Banner/Banner";
import {PlannerFuncSection} from "../organisms/PlannerFuncSection/PlannerFuncSection";
import {FAQSection} from "../organisms/FAQSection/FAQSection";
import {JoinUsSection} from "../organisms/JoinUsSection/JoinUsSection";
import {Footer} from "../organisms/Footer/Footer";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;


export const HomePage = () => {
    return(
        <Wrapper>
            <Header />
            <Banner />
            <PlannerFuncSection />
            <FAQSection />
            <JoinUsSection />
            <Footer />
        </Wrapper>
    )
}