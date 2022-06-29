import React from 'react';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandSass } from "react-icons/tb";
import * as C from './skillsStyled'

export const Skills = () => {
    return (  
        <C.Aside>
            <C.Title id='skills'>Skills</C.Title>
            <C.SkillsLine>
                <C.SkillsInfo>
                    <DiHtml5 style={{color: '#e34c26', cursor:'pointer'}} size='100px' />
                    <h3>HTML</h3>
                    <C.SkillsAbout>Linguagem de marcação de texto, estudo HTML a mais de 9 meses, fiz varios projetos usando o mesmo.</C.SkillsAbout>
                </C.SkillsInfo>
                <C.SkillsInfo>
                    <DiCss3 style={{color: '#264de4', cursor:'pointer'}} size='100px' />
                    <h3>CSS</h3>
                    <C.SkillsAbout>Linguagem de estilo, estudo e prático também a mais de 11 meses, fiz projetos usando flex-box e grid, alem disso uso o Styled Components e Sass para ajudar na estilização. Em frameworks uso o BootStrap.</C.SkillsAbout>
                </C.SkillsInfo>
                <C.SkillsInfo>
                    <TbBrandSass style={{color: '#cc6699', cursor:'pointer'}} size='100px' />
                    <h3>Sass</h3>
                    <C.SkillsAbout>Estudei Sass a alguns meses, porém o usei muito em prática, sei os conceitos básicos.</C.SkillsAbout>
                </C.SkillsInfo>
            </C.SkillsLine>
            <C.SkillsLine>
                <C.SkillsInfo>
                    <DiJavascript style={{color: '#f0db4f', cursor:'pointer'}} size='100px' />
                    <h3>JavaScript</h3>
                    <C.SkillsAbout>A primeira linguagem de programação com qual tive contato, estudo a 7 meses ela, sei seus conceitos básicos, além de saber manipular o DOM, fiz inúmeros projetos usando JavaScript.</C.SkillsAbout>
                </C.SkillsInfo>
                <C.SkillsInfo>
                    <GrReactjs style={{color: '#61dbfb', cursor:'pointer'}} size='100px' />
                    <h3>React.js</h3>
                    <C.SkillsAbout>Logo após conseguir ter uma boa base sobre JavaScript, começei a estudar React também, fiz alguns cursos, criei projetos básicos usando, Rotas, ContextApi e com requisições a Api's.</C.SkillsAbout>
                </C.SkillsInfo>
                <C.SkillsInfo>
                    <SiTypescript style={{color: '#3178c6', cursor:'pointer'}} size='105px' />
                    <h3>TypeScript</h3>
                    <C.SkillsAbout>Ao mesmo tempo que começei a estudar React, fiz cursos sobre Typescript, aprendi o básico, e pretendo me aprofundar em seu estudo, fiz projetos usando TypesScript junto do React.</C.SkillsAbout>
                </C.SkillsInfo>
            </C.SkillsLine>
        </C.Aside>
    );
}
