import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import {SyntheticEvent, useState} from "react";
import { Button } from "../../components/Button/Button";
import {RegisterDto} from "../../../../planner/src/user/dto/register.dto";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../store/Users/actions";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const RegisterBtn = styled(Button)`
    margin-top: 20px;
`;

const RegisterInput = styled(Input)`
    margin: 5px auto;
    height: 35px;
`;


export const RegisterForm = () => {

    const [registerUserData, setRegisterUserData] = useState<RegisterDto>({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e:SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        setRegisterUserData({
            ...registerUserData,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            dispatch(registerUser(registerUserData, navigate))
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <Form onSubmit={ (e) => handleSubmit(e) }>
            <RegisterInput name="name" type="text" placeholder="Imię" value={registerUserData.name} onChange={(e) => handleChange(e)} />
            <RegisterInput name="surname" type="text" placeholder="Nazwisko" value={registerUserData.surname} onChange={ (e) => handleChange(e) } />
            <RegisterInput name="email" type="email" placeholder="Adres email" value={registerUserData.email} onChange={ (e) => handleChange(e) } />
            <RegisterInput name="password" type="password" placeholder="Hasło" value={registerUserData.password} onChange={ (e) => handleChange(e) } />
            <RegisterBtn>Utwórz konto</RegisterBtn>
        </Form>
    )
}