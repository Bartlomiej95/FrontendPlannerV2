import styled from "styled-components";
import {SyntheticEvent, useState} from "react";
import { Heading } from "../../components/Heading/Heading";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {UserItem} from "../../../../planner/src/user/user.entity";

const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 50px);
`;

const LoginSectionHeading = styled(Heading)`
    margin-top: 100px;
    margin-bottom: 10px;
`;

const LoginParagraph = styled(Paragraph)`
    text-align: center;
`;

type LoginUserData = Pick<UserItem, "email" | "password">;


export const LoginSection = () => {

    const [loginData, setLoginData] = useState<LoginUserData>({ email: "", password: ""});

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('submit');
    }

    const handleChange = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement ;
        setLoginData({
            ...loginData,
            [target.name]: target.value,
        })
    }


    return(
        <Wrapper>
            <LoginSectionHeading>Zaloguj się</LoginSectionHeading>
            <LoginParagraph>Nie pamiętasz hasła? Wygeneruj nowe</LoginParagraph>
            <form onSubmit={(e) => handleSubmit(e)} >
                <Input name="email" type="email" placeholder="Podaj email" onChange={ (e) => handleChange(e) } />
                <Input name="password" type="password" placeholder="Podaj hasło" onChange={ (e) => handleChange(e) } />
                <Button>Zaloguj się</Button>
            </form>
        </Wrapper>
    )
}