import React from 'react';
import './greeting.css';
import {Link} from 'react-router-dom';

function Greeting(){

    return(
    <div className="contenedor__home">
        
        <div className="contenedor__principal">

        <img src="\Imagenes\Greeting page\logo-principal.png" alt=""className="imagen__principal"/>

        <div className="informacion__principal">
            <div className="info"><p>En este sitio encontraras información de los primeros 150 Pokémon y su información tal como su tipo, habilidad, experiencia y sus estadísticas de ataque, defensa y especial. 
                <br/>Tendrás acceso a la información particular de cada uno.
                <br/> Y además podrás buscar tu pokémon y agregarlo a tu equipo.
                </p>
            </div>
            <div>
                <img src="Imagenes\Greeting page\atrapalos-logo.png" alt="" className="informacion__principal--logo"/>
                <img src="Imagenes\Greeting page\pokedex.png" alt="" className="imagen__principal2"/>
            </div>
        </div>

        <div className="contenedor__entrada">
            <div>
                <Link to={'/home'}><img src="Imagenes\Greeting page\icono-pokebola.png" alt="" className="contenedor__entrada--pokebola"/>
                </Link>
            </div>
        </div>
        
        <div className="contenedor_imagenes">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" className="imagen__principal--pokemon"/>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" className="imagen__principal--pokemon"/>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg" alt="" className="imagen__principal--pokemon"/>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="" className="imagen__principal--pokemon"/>
        </div>

        </div>
        </div>
    )
}

export default Greeting;