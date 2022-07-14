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
                <a href="">
                    <DiHtml5 style={iconStyle} onMouseOver={handleIcon} size='60px' />
                </a>
                <a href="">
                    <DiCss3 style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <TbBrandSass style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <DiJavascript style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <GrReactjs style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <SiTypescript style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <SiStyledcomponents style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <SiVite style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <SiRedux style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <AiFillGithub style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <FaGitAlt style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
                <a>
                    <ImNpm style={iconStyle} size='60px' onMouseOver={handleIcon} />
                </a>
            </C.AreaIcons>
        </C.Aside>
    );
}
