import AOS from 'aos';
import 'aos/dist/aos.css';
import * as C from './styled';

const ProjectCard = ({url, title, info, data}) => {
    AOS.init();
    return (  
        <C.Container data-aos={data} data-aos-duration='700' >
            <C.Image src={url} alt={title} />
            <C.TitleProject>{title}</C.TitleProject>
            <C.InfoProject>{info}</C.InfoProject>
        </C.Container>
    );
}

export default ProjectCard;