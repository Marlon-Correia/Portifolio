import React, {useRef} from 'react';

import { qual } from '../../utils/tecno';
import * as C from './skillsStyled'
import Arrow from './chevron_icon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
export const Skills = () => {
    AOS.init();
    const carousel = useRef(null)
    const next = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    const previous = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    return (  
        <C.Aside data-aos="fade-right" data-aos-duration='700' >
            <C.Title id='skills'>Skills</C.Title>
            <C.Carousel ref={carousel}>
                {qual.map( item => (
                    <C.Item key={item.id}>
                        <C.AreaImage>
                            <C.Image src={item.logo} alt={item.id} />
                        </C.AreaImage>
                        <C.AreaInfo>
                            <C.Text>{item.name}</C.Text>
                        </C.AreaInfo>
                    </C.Item>
                ))}
                
            </C.Carousel>
            <div style={{display: 'flex'}}>
                <C.ButtonLeft onClick={previous}>
                    <img src={Arrow} alt='ARROW' />
                </C.ButtonLeft>
                <C.ButtonRight onClick={next}>
                    <img src={Arrow} alt='ARROW' />
                </C.ButtonRight>
            </div>
            
        </C.Aside>
    );
}
