import styled from "styled-components";

export const Container = styled.div`
    height: 60vh;
    background-color: ${( {theme} ) => theme.secundary};
    color: ${( {theme} ) => theme.color};
    display: flex;
    padding-bottom: 30px;
`;
export const AreaAbout = styled.div`
    width: 65%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const LeftSide = styled.div`
`;
export const Image = styled.img`
    height: 220px;

`;

export const RightSide = styled.div`
    max-width: 60%;
`;
export const Title = styled.h1`
    margin: 12px 0;
    color: #590FBF;

`;
export const Text = styled.p`
    color: ${( {theme} ) => theme.color};

`;
export const AreaButtons = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: center;
`;

const Button = styled.a`
    border-radius: 5px;
    padding: 8px 16px;
    margin: 0px 30px;
    cursor: pointer;
`;

export const ButtonNot = styled(Button)`
    background-color: #590fbf;
    border: 1px solid ${( {theme} ) => theme.primary};
`;
export const ButtonOut = styled(Button)`
    color: #590FBF;
    background-color: ${( {theme} ) => theme.primary};
    border: 1px solid #590FBF;
`;