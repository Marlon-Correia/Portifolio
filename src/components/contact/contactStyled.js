import styled from "styled-components";

export const Footer = styled.footer`
    background-color:#590FBF;
`;
export const ContTitle = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
`;
export const AreaContact = styled.div`
    padding-top: 10px;
    height: 16vh;
    width: 80%;
    margin: auto;
`;
export const ContInsta = styled.div`
    display: inline-flex;
    align-items: center;
`;
export const Link = styled.a`
    text-decoration: none;
    margin: 0 30px;
    color: white;
    transition: all ease 0.8s;

    &:hover{
        text-decoration: underline;
    }
`;
export const Final = styled.p`
    text-align: center;
    padding-bottom: 20px;  
`;
