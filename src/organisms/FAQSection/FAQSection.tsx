import styled from "styled-components";
import { Heading } from "../../components/Heading/Heading";
import { data } from "../../data/staticData";
import { QAPlannerCard } from "../../molecules/QAPlannerCard/QAPlannerCard";

const Wrapper = styled.section`
    width: 100vw;
    min-height: 800px;
`;


export const FAQSection = () => {

    return(
        <Wrapper >
            <Heading>Chcesz poznać nasze narzędzie?</Heading>
            {
                data.faq.map(item => (
                    <QAPlannerCard
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))
            }
        </Wrapper>
    )
}
