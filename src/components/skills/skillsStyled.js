import styled from "styled-components";

export const Title = styled.h1`
    padding-top: 40px;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
`;
export const Aside = styled.aside`
    padding-bottom: 80px;
    color: ${( {theme} ) => theme.color};
    background-color: ${( {theme} ) => theme.secundary};
`;
export const AreaIcons = styled.div`
    width: 45%;
    margin: 50px auto;
`;