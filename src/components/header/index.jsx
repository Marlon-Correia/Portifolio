import React, { useContext } from 'react';
import {ThemeContextt} from '../../contexts/theme.jsx';
import * as C from './headerStyled.js'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Photo from './images/photo.png';

export const Cabecalho = () => {
    const { switchTheme } = useContext(ThemeContextt)
    const { secundary, info } = useContext(ThemeContext)

    return (  
            <C.Header>
                <C.AreaNav>
                            <C.ItemNav href='#about'>About me</C.ItemNav>
                            <C.ItemNav href='#projects' >Projects</C.ItemNav>
                            <C.ItemNav href='#skills'>Skills</C.ItemNav>
                            <C.ItemNav href='#contact'>Contact</C.ItemNav>
                    </C.AreaNav>
                <C.LeftSide>
                    <C.AreaName>
                        <C.LeftJob>Hello, i'm</C.LeftJob>
                        <C.LeftName>Marlon Correia</C.LeftName>
                        <C.LeftJob>Front-End Developer</C.LeftJob>
                    </C.AreaName>
                    <C.AreaButton>
                        <C.Button href='#contact'>Linkedln</C.Button>
                        <C.Button href='#contact'>GitHub</C.Button>
                    </C.AreaButton>
                </C.LeftSide>

                <C.RightSide>
                    <C.AreaPhoto>
                        <C.Image src={Photo} alt="foto" />
                    </C.AreaPhoto>
                </C.RightSide>
            </C.Header>
    );
}
