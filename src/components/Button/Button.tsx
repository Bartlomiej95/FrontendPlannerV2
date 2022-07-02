import styled from 'styled-components';


export const Button = styled.button`
    display: block;
    width: ${({ theme }) => theme.Button.mobileWidth};
    height: ${({ theme }) => theme.Button.mobileHeight};
    background-color: ${({ theme }) => theme.Button.primaryBcgColor};
    border-radius: ${({ theme }) => theme.Button.borderRadius};
    color: ${({ theme }) => theme.Button.primaryColor};
    cursor: pointer;
    outline: none; 
    margin: 0 auto;
  
    :hover {
        background-color: ${({ theme }) => theme.primaryHoverBcgColor}
    }
`;

export const SecButton = styled.button`
    width: ${({ theme }) => theme.Button.mobileWidth};
    height: ${({ theme }) => theme.Button.mobileHeight};
    background-color: ${({ theme }) => theme.Button.secondaryBcgColor};
    border-radius: ${({ theme }) => theme.Button.borderRadius};
    color: ${({ theme }) => theme.Button.secondaryColor};
    border: 1px solid ${({ theme }) => theme.Button.secondaryColor};
    cursor: pointer;
    outline: none;
  
    :hover {
        background-color: ${({ theme }) => theme.Button.secondaryHoverBcgColor};
        color: ${({ theme }) => theme.Button.secondaryHoverColor};
    }
`;