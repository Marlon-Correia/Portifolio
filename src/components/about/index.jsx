import React from 'react';
import * as C from './aboutStyled';
import eu from './images/foto_foda.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutMe = () => {
    AOS.init();
    return (  
        <C.Container id='about'>
            <C.AreaAbout>
                <C.LeftSide data-aos="fade-right" data-aos-duration='700'>
                    <C.Image src={eu} />
                </C.LeftSide>

                <C.RightSide data-aos="fade-right" data-aos-duration='700'>
                    <C.Title>
                        Sobre mim
                    </C.Title>
                    <C.Text>
                        Me chamo Marlon Rafael Correia, tenho 18 anos, estudo programação a mais de 1 ano, sempre tive curiosidade de como funcionava essa área, fiquei encantado em como posso desenvolver o que quiser, com o estudo certo, sou focado na stack Front-End, estudo HTML, CSS(junto do Sass e BootStrap), JavaScript, Typescript e React.
                    </C.Text>
                    <C.Text>
                        Pretendo me aperfeiçoar com o passar do tempo, é estudar mais sobre o Back-End, quando tiver uma boa base sobre o React, junto do JavaScript.
                    </C.Text>
                    <C.AreaButtons>
                        <C.ButtonNot>Curriculo</C.ButtonNot>
                        <C.ButtonOut>Contato</C.ButtonOut>
                    </C.AreaButtons>
                </C.RightSide>
            </C.AreaAbout>
        </C.Container>
    );
}

