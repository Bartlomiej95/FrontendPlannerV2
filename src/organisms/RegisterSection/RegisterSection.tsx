import styled from "styled-components";
import { Heading } from "../../components/Heading/Heading";
import { RegisterForm } from "../../molecules/RegisterForm/RegisterForm";

const Wrapper = styled.section`
    width: 100vw;
`;

const RegisterHeading = styled(Heading)`
    width: 80vw;
    margin: 50px auto 20px auto;
`;

export const RegisterSection = () => {
    return(
        <Wrapper>
            <RegisterHeading>Formularz rejestracyjny</RegisterHeading>
            <RegisterForm />
        </Wrapper>
    )
}