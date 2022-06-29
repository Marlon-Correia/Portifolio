import React, { useContext } from 'react';
import {ThemeContextt} from '../../contexts/theme.jsx';
import * as C from './headerStyled.js'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';


export const Cabecalho = () => {
    const { switchTheme } = useContext(ThemeContextt)
    const { secundary, info } = useContext(ThemeContext)

    return (  
        <>
            <C.Header>
                <C.LeftSide>
                    <C.AreaName>
                        <C.LeftName>Marlon Correia</C.LeftName>
                        <C.LeftJob>Front-End Developer</C.LeftJob>
                    </C.AreaName>
                    <C.LeftAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur dolorum praesentium minus. Temporibus autem quia quaerat officia necessitatibus non? Voluptatum, in id molestiae labore aut beatae quisquam possimus delectus perspiciatis veniam unde officiis, est blanditiis ratione autem molestias. Mollitia quidem numquam non recusandae, sunt, officia tempora hic adipisci error neque architecto.</C.LeftAbout>
                    <C.AreaButton>
                        <C.Button>Mudar Tema</C.Button>
                    </C.AreaButton>
                </C.LeftSide>

                <C.RightSide>
                    <C.AreaNav>
                        <nav>
                            <C.ItemNav href='#about'>Sobre</C.ItemNav>
                            <C.ItemNav href='#projects' >Projetos</C.ItemNav>
                            <C.ItemNav href='#skills'>Skills</C.ItemNav>
                            <C.ItemNav href='#contact'>Contatos</C.ItemNav>
                            <C.ItemNav>
                                <Switch 
                                    onChange={switchTheme}
                                    checked={info === 'dark'}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={12}
                                    width={40}
                                    handleDiameter={20}
                                    onColor={secundary}
                                    offColor={secundary}
                                />
                            </C.ItemNav>
                        </nav>
                    </C.AreaNav>
                </C.RightSide>
            </C.Header>
        </>
    );
}
