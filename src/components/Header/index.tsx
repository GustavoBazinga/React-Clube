import logo from './assets/logo.png';
import perfil from './assets/perfil.png';
import styled from 'styled-components';
import Navbar from '../Navbar';

const HeaderBase = styled.header`
    align-items: center;    
    display: flex;
    justify-content: space-between;
    padding: 2em 4em;
    background-color: #4E1417;
    background: rgba(126, 20, 23, .1) 
     

`

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-grow: .1;
    `

const Link = styled.a`
    color: #4E1417;
    font-weight: 700;

`

const Logo = styled.img`
    height: 4em;
    margin-right: 1em;
    width: 5em;
`

const Perfil = styled.img`
`



const Header: React.FC = () => {
  return (
    <HeaderBase>
        <Logo src={logo} alt="Logo do Clube"/>
        <Navbar />
        <Container>
          <Perfil src={perfil} alt="Perfil" />
          <Link href="#">Sair</Link>
        </Container>
    </HeaderBase>
  );
};

export default Header;