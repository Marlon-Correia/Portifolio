import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
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
    width: 75%;
    margin: auto;
    margin-top: 15px;
    @media(max-width: 660px){
        width: 90%;
        font-size: 10px;
    }
`;
export const Image = styled.img`
    border-radius: 5px;
    max-width: 330px;
    max-height: 220px;
    @media(max-width: 340px){
        width: 100%;
    }
`;