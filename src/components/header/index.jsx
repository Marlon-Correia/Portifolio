import React, { useContext } from 'react';
import {ThemeContextt} from '../../contexts/theme.jsx';
import * as C from './headerStyled.js'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';


export const Cabecalho = () => {
    const { switchTheme } = useContext(ThemeContextt)
    const { secundary, info } = useContext(ThemeContext)

    return (  
            <C.Header>
                <C.LeftSide>
                    <C.AreaName>
                        <C.LeftName>Marlon Correia</C.LeftName>
                        <C.LeftJob>Front-End Developer</C.LeftJob>
                    </C.AreaName>
                    <C.AreaButton>
                        <C.Button href='#contact'>Contatos</C.Button>
                    </C.AreaButton>
                </C.LeftSide>

                <C.RightSide>
                    <C.AreaNav>
                        <nav>
                            <C.ItemNav href='#about'>Sobre</C.ItemNav>
                            <C.ItemNav href='#projects' >Projetos</C.ItemNav>
                            <C.ItemNav href='#skills'>Skills</C.ItemNav>
                            <C.ItemNav href='#contact'>Contatos</C.ItemNav>
                        </nav>
                        <C.ItemNavSwitch>
                                <Switch 
                                    onChange={switchTheme}
                                    checked={info === 'dark'}
                                    checkedIcon={true}
                                    uncheckedIcon={true}
                                    height={10}
                                    width={35}
                                    handleDiameter={15}
                                    onColor={secundary}
                                    offColor={secundary}
                                />
                            </C.ItemNavSwitch>
                    </C.AreaNav>
                </C.RightSide>
            </C.Header>
    );
}
