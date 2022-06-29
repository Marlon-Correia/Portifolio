import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%;
    color: ${( {theme} ) => theme.color};
`;
export const LeftSide = styled.div`
    color: ${( {theme} ) => theme.color};
    background-color: ${( {theme} ) => theme.primary};
    width: 65%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: center;
`;
export const AreaName = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 25px;
`;
export const LeftName = styled.div`
    color: #590FBF;
    margin-left: 120px;
    font-size:60px;
`;
export const LeftJob = styled.div`
    color: ${( {theme} ) => theme.color};
    margin-left: 128px;
    font-size: 25px;
`;
export const LeftAbout = styled.div`
    margin-left: 120px;
    max-width: 60%;
    margin-bottom: 30px;
`;
export const AreaButton = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    background-color: ${( {theme} ) => theme.primary};
    color:#590FBF;
    padding: 13px 35px;
    border: 1px solid #590FBF;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    transition: all ease 0.8s;

    &:hover{
        font-size: 23px;
    }
`;



export const RightSide = styled.div`
    background-color: #590FBF;
    width: 50%;
    height: 100vh;
`;
export const AreaNav = styled.div`
    max-width: 85%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;
export const ItemNav = styled.a`
    color: ${( {theme} ) => theme.color};
    text-decoration: none;
    margin: 0 10px;
    font-size: 20px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        color: ${( {theme} ) => theme.secundary};
    }
`;
export const Img = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: black;
    margin-top: 50px;
    margin-left: -20px;
`;
