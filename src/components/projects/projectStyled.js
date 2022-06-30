import styled from "styled-components";

export const Main = styled.main`
    background-color: ${( {theme} ) => theme.primary};
    color: ${( {theme} ) => theme.color};
    padding-bottom: 20px;
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
    display: flex;
    margin-bottom: 50px;
    @media(max-width: 805px){
        flex-direction: column;
        align-items: center;
        margin-bottom: 2px;
    }
    
`;
export const SideProject = styled.div`
    width: 50%;
    text-align: center;
    margin-bottom: 10px;
    @media(max-width: 805px){
        width: 80%;
    }
`;
export const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Image1 = styled.img`
    border-radius: 5px;
    width: 400px;
    height: 250px;
    @media(max-width: 410px){
        width: 100%;
    }
`;
export const Image2 = styled.img`
    border-radius: 5px;
    width: 330px;
    height: 250px;
    @media(max-width: 340px){
        width: 100%;
    }
`;
export const TitleProject = styled.p`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    @media(max-width: 660px){
        font-size: 14px;
    }
`;
export const InfoProject = styled.p`
    width: 72%;
    margin: auto;
    margin-top: 15px;
    @media(max-width: 660px){
        width: 100%;
        font-size: 10px;
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
