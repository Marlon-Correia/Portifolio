import styled from "styled-components";

export const Main = styled.main`
    background-color: ${( {theme} ) => theme.primary};
    color: ${( {theme} ) => theme.color};
    padding-bottom: 20px;
    width: 100%;
`;
export const Title = styled.h1`
    padding-top: 40px;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    @media(max-width: 660px){
        font-size: 40px;
    }
`;
export const AreaProject = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 50px;
    overflow: hidden;
    @media(max-width: 805px){
        grid-template-columns: 1fr;
        
    }
    
`;

export const LeftAbout = styled.div`
    color: #fff;
    margin-left: 100px;
    max-width: 75%;
    margin-bottom: 30px;
`;
export const AreaButton = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    border: none;
    padding: 13px 35px;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    transition: all ease 0.8s;

    &:hover{
        color: ${( {theme} ) => theme.secundary};
        font-size: 23px;
    }
`;

export const LinkGit = styled.a`
    text-align: center;
    color: #590FBF;
    text-decoration: none;
    font-size: 22px;
    transition: all ease 0.4s;
    &:hover{
        font-size: 25px;
        text-decoration: underline;
    }
`;