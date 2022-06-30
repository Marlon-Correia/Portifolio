import React from 'react';
import TaskGer from './images/ger3.png'
import  Clone  from './images/clone_3.png'
import * as C from './projectStyled'

export const Projects = () => {
    return (  
        <C.Main>
            <C.Title id='projects'>Projetos</C.Title>
            <C.AreaProject>
                <C.SideProject>
                    <C.Project>
                        <C.Image1 src={Clone} alt="" />
                        <C.TitleProject>NetFilmes</C.TitleProject>
                        <C.InfoProject>Nesse projeto, foi criado um clone do menu de filmes da Netflix, onde foi consumida a API do TMDB(The Movie Database), pude aprender muito na parte de requisições, é como usar os dados obtidos dela, além de usar o Styled Components, que nunca havia utilizado, as tecnologias usadas foram HTML, CSS, JavaScript, Styled Components e React  </C.InfoProject>
                    </C.Project>
                </C.SideProject>

                <C.SideProject>
                    <C.Project>
                        <C.Image2 src={TaskGer}/>
                        <C.TitleProject>Gerenciador de Tarefas</C.TitleProject>
                        <C.InfoProject>No projeto de gerenciador de tarefas foi usado o Styled Components, junto do React, além de hooks, como o useState e useEffect, foi feito uma requisição a API do JsonPlaceholder, é usado o React-Router, para ir ao sobre de cada tarefa.</C.InfoProject>
                    </C.Project>
                </C.SideProject>
            </C.AreaProject>
            <p style={{textAlign: 'center'}}><C.LinkGit target={'_blank'} href="https://github.com/Marlon-Correia?tab=repositories">Repositório GitHub</C.LinkGit></p>
        </C.Main>
    );
}


