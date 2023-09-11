import Header from "../components/header/header";
import astronauta from '.././assets/astronaut_jump.png'
import { Astronauta } from "./forms/styledForm";

function HomePage() {
    return(
        <>
            <Header/>
            <Astronauta src={astronauta}/>
        </>
    )
}

export default HomePage;