import React from 'react';
import TaskGer from './images/ger3.png'
import  Clone  from './images/clone_3.png'
import * as C from './projectStyled'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard';

export const Projects = () => {
    AOS.init();
    return (  
        <C.Main>
            <C.Title id='projects'  data-aos="fade-down" data-aos-duration='700' >Projetos</C.Title>
            <C.AreaProject>
                <ProjectCard 
                    url={Clone}
                    data='fade-right'
                    title='NetFilmes'
                    info='Nesse projeto, foi criado um clone do menu de filmes da Netflix, onde foi consumida a API do TMDB(The Movie Database), pude aprender muito na parte de requisições, é como usar os dados obtidos dela, além de usar o Styled Components, que nunca havia utilizado, as tecnologias usadas foram HTML, CSS, JavaScript, Styled Components e React.'
                />
                
                <ProjectCard 
                    url={TaskGer}
                    data='fade-left'
                    title='Gerenciador de Tarefas'
                    info='No projeto de gerenciador de tarefas foi usado o Styled Components, junto do React, além de hooks, como o useState e useEffect, foi feito uma requisição a API do JsonPlaceholder, é usado o React-Router, para ir ao sobre de cada tarefa.'
                />
            </C.AreaProject>
            <p style={{textAlign: 'center'}}><C.LinkGit target={'_blank'} href="https://github.com/Marlon-Correia?tab=repositories">Repositório GitHub</C.LinkGit></p>
        </C.Main>
    );
}


