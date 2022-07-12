import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 100vh;
    color: ${( {theme} ) => theme.color};

`;
export const LeftSide = styled.div`
    color: ${( {theme} ) => theme.color};
    background-color: ${( {theme} ) => theme.primary};
    width: 60%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px){
        width: 92%;
        justify-content: flex-start;
        padding-top:55%;
    }
`;
export const AreaName = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 25px;
`;
export const LeftName = styled.div`
    color: #590FBF;
    margin-top: -25px;
    font-size:65px;
    @media (min-width: 300px) and (max-width: 425px){
        font-size: 30px;
    }
`;
export const LeftJob = styled.div`
    color: ${( {theme} ) => theme.color};
    margin-left: 8px;
    font-size: 35px;
    @media (min-width: 300px) and (max-width: 425px){
        font-size: 20px;
    }
`;
export const LeftAbout = styled.div`
    margin-left: 120px;
    max-width: 60%;
    margin-bottom: 30px;
`;
export const AreaButton = styled.div`
    margin-top: 20px;
`;

export const Button = styled.a`
    background-color: ${( {theme} ) => theme.primary};
    color:#590FBF;
    padding: 13px 35px;
    margin-right:30px;
    border: 1px solid #590FBF;
    border-radius: 5px;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
    transition: all ease 0.5s;
    &:hover{
        background-color: #590fbf;
        color: #fff;
    }
    @media (min-width: 300px) and (max-width: 425px){
        padding: 8px 20px;
    }
`;



export const RightSide = styled.div`
background-color: ${( {theme} ) => theme.primary};
    width: 40%;
    height: 90vh;
    display: flex;
    align-items: center;
    `;
export const AreaNav = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #590fbf;
    z-index: 10;
`;
export const AreaPhoto = styled.div`
    padding-left: 45px;
`;
export const Image = styled.img`
    height: 250px;
`;

export const ItemNav = styled.a`
    display: none;
    color: ${( {theme} ) => theme.color};
    text-decoration: none;
    margin-right:40px;
    font-size: 20px;
    transition: all ease .8s;
    cursor: pointer;
    color: #fff;
    &:hover{
        color: #000;
    }
    @media (min-width: 768px){
        display: inline-block;
    }
`;
export const ItemNavSwitch = styled.a`
    color: ${( {theme} ) => theme.color};
    text-decoration: none;
    margin: 0 10px;
    font-size: 20px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        color: ${( {theme} ) => theme.secundary};
    }
    @media (min-width: 768px){
        display: inline-block;
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
export const GifArea = styled.div`

`;
export const Gif = styled.div`
    background-image = url(https://pa1.narvii.com/6539/f47caf2747194bc8eaa08661e9241673e3dab3b6_hq.gif)
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    position: absolute;
    
    `;