import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header/Header";
import {Banner} from "../organisms/Banner/Banner";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;


export const HomePage = () => {
    return(
        <Wrapper>
            <Header />
            <Banner />
        </Wrapper>
    )
}