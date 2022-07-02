import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.Paragraph.mobileFontSize};
    text-align: left;
`;

export const NumberParagraph = styled.p`
    margin-right: 26px;
    font-weight: ${({ theme }) => theme.NumberParagraph.mobileFontWeight};
    font-size: ${({ theme }) => theme.NumberParagraph.mobileFontSize};
    color: ${({ theme }) => theme.Button.PrimaryHoverBcgColor};
    text-align: center;
`;