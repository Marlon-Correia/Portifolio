import styled from "styled-components";

export const Footer = styled.footer`
    background-color:#000000;
`;
export const ContTitle = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
`;
export const AreaContact = styled.div`
    padding-top: 10px;
    width: 70%;
    margin: auto;
    @media(max-width: 1030px){
        display: flex;
        flex-direction: column;
    }
`;
export const ContInsta = styled.div`
    display: inline-flex;
    align-items: center;
    @media(max-width: 721px){
        display: flex;
    }
`;
export const Link = styled.a`
    text-decoration: none;
    margin: auto;
    padding: 0 5px;
    color: white;
    transition: all ease 0.8s;

    &:hover{
        text-decoration: underline;
    }
`;
export const LinkName = styled.h2`
    font-size: 20px;
    @media(max-width: 480px){
        font-size: 12px;
    }
`;

export const Final = styled.p`
    text-align: center;
    padding-bottom: 20px;  
`;
