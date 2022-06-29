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
export const SkillsLine = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
`;
export const SkillsInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
`;
export const SkillsAbout = styled.div`
    max-width: 100%;
    text-align: center;
`;