import styled from "styled-components";

export const Title = styled.h1`
    padding-top: 40px;
    font-weight: 500;
    font-size: 50px;
`;
export const Aside = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
    color: ${( {theme} ) => theme.color};
    background-color: ${( {theme} ) => theme.secundary};
`;
export const AreaIcons = styled.div`
    width: 40%;
    margin: 30px 0;
    @media (max-width: 399px){
        width: 80%;
    }
`;