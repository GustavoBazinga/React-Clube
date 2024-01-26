import { Link } from "react-router-dom";

function NavItems(){

    return (
        <nav>
            <Link to="/">Início</Link>
            <Link to="/search">ClubeX</Link>
        </nav>
    )
}

export default NavItems;