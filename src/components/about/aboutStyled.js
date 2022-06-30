import styled from "styled-components";

export const Container = styled.div`
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
    @media (max-width: 768px){
        width: 100%;
    }
`;
export const LeftSide = styled.div`
`;
export const Image = styled.img`
    height: 220px;
    @media (max-width: 500px){
        height: 150px;
    }

`;

export const RightSide = styled.div`
    max-width: 60%;
`;
export const Title = styled.h1`
    margin: 12px 0;
    color: #590FBF;
    @media (max-width: 768px){
        font-size: 20px;
    }

`;
export const Text = styled.p`
    color: ${( {theme} ) => theme.color};
    @media (max-width: 768px){
        font-size: 10px;
    }

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
    @media (max-width: 480px){
        padding: 4px 8px;
        margin: 0px 10px;
    }
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