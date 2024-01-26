import styled from 'styled-components';
import avaliacao from './assets/avaliacao.png';
import consulta from  './assets/consulta.png';
import grafica from './assets/grafico.png';

interface Props {
    img?: string;
    children?: React.ReactNode;
}

interface IImage {
    avaliacao: string,
    consulta: string,
    grafica: string
}

const Span = styled.span<Props>`
    background-repeate: no-repeat;
    background-size: cover;
    background-position: center;
    width: 25px;
    height: 25px;
    background-image: ${props => props.img ? `url(${props.img})` : 'none'};
`

const TitleBase = styled.h2`
color: #4E1417;
`

const Container = styled.div`
display: flex;
align-items: center;
`

function Title ({img, children}: Props) {
    const images: IImage = {
        avaliacao: avaliacao,
        consulta: consulta,
        grafica: grafica
    }
    return (
        <Container>
            {img && <Span img={images[img as keyof IImage]} />}
            <TitleBase>{children}</TitleBase>
        </Container>
    )
}

export default Title;