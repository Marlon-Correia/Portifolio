import React from 'react';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandSass } from "react-icons/tb";
import * as C from './skillsStyled'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    AOS.init();
    const handleIcon = () => {

    }
    return (  
        <C.Aside data-aos="fade-right" data-aos-duration='700' >
            <C.Title id='skills'>Skills</C.Title>
            <C.AreaIcons>
                <a href="">
                    <DiHtml5 style={{margin: '0 15px', color: '#e34c26', cursor:'pointer'}} onMouseOver={handleIcon} size='60px' />
                </a>
                <a href="">
                    <DiCss3 style={{margin: '0 15px', color: '#264de4', cursor:'pointer'}} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <TbBrandSass style={{margin: '0 15px', color: '#cc6699', cursor:'pointer'}} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <DiJavascript style={{margin: '0 15px', color: '#f0db4f', cursor:'pointer'}} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <GrReactjs style={{margin: '0 15px', color: '#61dbfb', cursor:'pointer'}} size='60px' onMouseOver={handleIcon} />
                </a>
                <a href="">
                    <SiTypescript style={{margin: '0 15px', color: '#3178c6', cursor:'pointer'}} size='60px' onMouseOver={handleIcon} />
                </a>

            </C.AreaIcons>
        </C.Aside>
    );
}
