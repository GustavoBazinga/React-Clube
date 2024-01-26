import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';
import whatsapp from './assets/whatsapp.png';
import styled from 'styled-components';

const FooterBase = styled.footer`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    color: #FFF;
    padding: 1em;
    background-color: #4E1417;
    text-align: center;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`;

const ListItem = styled.li`
    list-style-type: none;
`;

function Footer(){
    const socialMedia: {[key: string]: string} = {
        facebook: facebook,
        instagram: instagram,
        google: google,
        whatsapp: whatsapp,
    };

    return (
        <FooterBase>
            <List>
                {Object.keys(socialMedia).map((key) => {
                    return (
                        <ListItem key={key}>
                            <a href="#">
                                <img src={socialMedia[key]} alt={key} />
                            </a>
                        </ListItem>
                    );
                })}
            </List>

            <p>2024 © Gustavo Alves - Todos os direitos reservados</p>

        </FooterBase>
    );
}

export default Footer;