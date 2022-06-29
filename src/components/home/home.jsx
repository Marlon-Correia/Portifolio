import React, {useContext} from 'react';
import { AboutMe } from '../about';
import { Contact } from '../contact';
import { Cabecalho } from '../header';
import { Projects } from '../projects';
import { Skills } from '../skills';

const Home = () => {
    return (
        <>  
            <Cabecalho />
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}

export default Home;