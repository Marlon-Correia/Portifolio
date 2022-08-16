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
export const Carousel = styled.div`
    padding: 10px 0;
    width: 52vw;
    height: 250px;
    display: flex;
    overflow-x: hidden;
    align-items: center;
    scroll-behavior: smooth;
    @media (min-width: 320px) and (max-width: 625px){
        width: 70vw;
    }
`;
export const AreaInfo = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #590fbf;
    border-radius: 5px;
    color: white;
`;
export const AreaImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;
export const Item = styled.div`
    margin: 15px;
    padding: 10px;
    width: 200px;
    height: 150px;
    flex: none;
    @media (min-width: 320px) and (max-width: 625px){
        width: 100px;
        height: 100px;
        margin: 5px;
        padding: 5px;
    }
`;
export const Text = styled.span`
    font-size: 16px;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 625px){
        font-size: 10px;
    }
`;
export const ButtonLeft = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border : 1px solid #590fbf;
    border-radius: 5px;
    height: 50px;
    width: 60px;
    margin: 6px 10px;
    transition: all ease .5s;
    cursor: pointer;
    img{
        transform: rotate(180deg);
        width: 50%;
    }
    :hover {
        background-color : #590fbf;
        border: none;
    }
`;
export const ButtonRight = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    border : 1px solid #590fbf;
    border-radius: 5px;
    height: 50px;
    margin: 6px 10px;
    transition: all ease .5s;
    cursor: pointer;
    img{
        width: 50%;
    }
    :hover {
        background-color : #590fbf;
        border: none;
    }
`;
export const Image = styled.img`
    width: 110px;

    @media (min-width: 320px) and (max-width: 625px){
        width: 60px;
    }
`;