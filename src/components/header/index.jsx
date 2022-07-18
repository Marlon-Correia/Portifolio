import React from 'react';
import * as C from './headerStyled.js'
import Photo from './images/photo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Cabecalho = () => {
    AOS.init();
    return (  
        <>
            <C.Header>
                <C.AreaNav>
                            <C.ItemNav data-aos="fade-right" data-aos-duration='700'  href='#about'>About me</C.ItemNav>
                            <C.ItemNav data-aos="fade-right" data-aos-duration='700'  href='#projects' >Projects</C.ItemNav>
                            <C.ItemNav data-aos="fade-right" data-aos-duration='700'  href='#skills'>Skills</C.ItemNav>
                            <C.ItemNav data-aos="fade-right" data-aos-duration='700'  href='#contact'>Contact</C.ItemNav>
                </C.AreaNav>
                <C.LeftSide>
                    <C.AreaName data-aos="fade-right" data-aos-duration='700' >
                        <C.LeftJob>Hello, i'm</C.LeftJob>
                        <C.LeftName>Marlon Correia.</C.LeftName>
                        <C.LeftJob>Front-End Developer</C.LeftJob>
                    </C.AreaName>
                    <C.AreaButton data-aos="fade-right" data-aos-duration='700' >
                        <C.Button target='_blank' href='https://www.linkedin.com/in/marlon-correia32/'>Linkedln</C.Button>
                        <C.Button target='_blank' href='https://github.com/Marlon-Correia'>GitHub</C.Button>
                    </C.AreaButton>
                </C.LeftSide>

                <C.RightSide>
                    <C.AreaPhoto data-aos="fade-down" data-aos-duration="1500">
                        <C.Image src={Photo} alt="foto" />
                    </C.AreaPhoto>
                </C.RightSide>
            </C.Header>
            <C.GifArea>
                <C.Gif> </C.Gif>
            </C.GifArea>
        </>
    );
}
