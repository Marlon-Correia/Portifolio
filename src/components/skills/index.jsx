import React from 'react';
import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { SiRedux, SiTypescript, SiStyledcomponents, SiVite } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandSass } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

import * as C from './skillsStyled'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    AOS.init();
    const iconStyle = {margin: '20px 10px', color: '#000', cursor: 'pointer'};
    const handleIcon = () => {

    }
    return (  
        <C.Aside data-aos="fade-right" data-aos-duration='700' >
            <C.Title id='skills'>Skills</C.Title>
            <C.AreaIcons>
                <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics">
                    <DiHtml5 style={iconStyle} onMouseOver={handleIcon} size='60px' />
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                    <DiCss3 style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="https://sass-lang.com/documentation/">
                    <TbBrandSass style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                    <DiJavascript style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="https://pt-br.reactjs.org/">
                    <GrReactjs style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="https://www.typescriptlang.org/docs/">
                    <SiTypescript style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href='https://styled-components.com/'>
                    <SiStyledcomponents style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href='https://vitejs.dev/'>
                    <SiVite style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href='https://redux.js.org/'>
                    <SiRedux style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href='https://github.com/Marlon-Correia'>
                    <AiFillGithub style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a  href='https://git-scm.com/'>
                    <FaGitAlt style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a  href='https://www.npmjs.com/'>
                    <ImNpm style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
            </C.AreaIcons>
        </C.Aside>
    );
}
