import styled from "styled-components";
import { SubHeading } from "../../components/Heading/Heading";
import { NumberParagraph } from "../../components/Paragraph/Paragraph";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 37px;
    margin: 30px auto;
`;

const PlannerFuncCardSubHeading = styled(SubHeading)`
    text-align: left;
`;

interface Props {
    content: string,
    id: number,
}

export const PlannerFuncCard = ({ content, id }: Props) => {
    return(
        <Wrapper>
            <NumberParagraph>{id}</NumberParagraph>
            <PlannerFuncCardSubHeading>{content}</PlannerFuncCardSubHeading>
        </Wrapper>
    )
}