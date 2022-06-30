import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import * as C from './contactStyled'


export const Contact = () => {
    let iconStyles = { color: "white", cursor:'pointer' };
    return (  
        <C.Footer>
            <C.ContTitle id='contact'>Contatos</C.ContTitle>
            <C.AreaContact>
                <C.Link target={'_blank'} href="https://www.instagram.com/marlo_dev/">
                    <C.ContInsta>
                        <AiOutlineInstagram style={iconStyles} size='50px' />
                        <C.LinkName>marlo_dev</C.LinkName>
                    </C.ContInsta>
                </C.Link>
                <C.Link target={'_blank'} href="https://www.linkedin.com/in/marlon-correia32/">
                    <C.ContInsta>
                        <AiOutlineLinkedin style={iconStyles} size='50px' />
                        <C.LinkName>Marlon Correia</C.LinkName>
                    </C.ContInsta>
                </C.Link>
                <C.Link className='link' target={'_blank'} href="mailto:rafacorreia203@gmail.com">
                    <C.ContInsta>
                        <MdOutlineEmail style={iconStyles} size='50px' />
                        <C.LinkName>rafacorreia203@gmail.com</C.LinkName>
                    </C.ContInsta>
                </C.Link>
            </C.AreaContact>
            <C.Final>© Feito por Marlon Correia </C.Final>
        </C.Footer>
    );
}
