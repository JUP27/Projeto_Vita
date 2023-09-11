import { Caminhos, Logo, Nav } from "./styleHeader";
// import { useNavigate } from "react-router-dom";

function Header() {
    return(
        <>
            <Nav>
                <Logo/>
                <Caminhos>
                    <a href="/index">Home</a>
                    <a href="#">Formulário</a>
                    <a href="/ranking">Ranking</a>
                    <a href="#">Perfil</a>
                    <a href="/about" >Sobre</a>
                </Caminhos>
            </Nav>
        </>
    )
}

export default Header; 