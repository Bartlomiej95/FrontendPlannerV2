import styled from 'styled-components';
import {Header} from "../organisms/Header/Header";
import { RegisterSection } from '../organisms/RegisterSection/RegisterSection';


const Wrapper = styled.div`
    width: 100vw;
`;

export const RegisterPage = () => {
    return(
        <Wrapper>
            <Header />
            <RegisterSection />
        </Wrapper>
    )
}
