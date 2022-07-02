import styled from 'styled-components';
import { Heading } from '../../components/Heading/Heading';
import { data } from '../../data/staticData';
import { PlannerFuncCard } from '../../molecules/PlannerFuncCard/PlannerFuncCard';


const Wrapper = styled.section`
    width: 100vw;
    min-height: 500px;
`;

const PlannerFuncHeading = styled(Heading)`
    padding: 0 30px;
    margin-bottom: 50px;
`;

const WrapperFuncCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin: 0 auto;
`;

export const PlannerFuncSection = () => {
    return(
        <Wrapper>
            <PlannerFuncHeading>Funkcje naszego planera</PlannerFuncHeading>
            <WrapperFuncCard>
                {
                    data.functions.map(item =>(
                        <PlannerFuncCard
                            key={item.id}
                            id={item.id}
                            content={item.content}
                        />
                    ) )
                }
            </WrapperFuncCard>
        </Wrapper>
    )
}