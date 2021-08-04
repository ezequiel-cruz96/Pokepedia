import React from  'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){

    return(
    <>
        <div>
            <div>
            <Link to={"/home"} className="barraNavegacion__logo"><img src="Imagenes\Greeting page\logo-principal.png" alt="" className="logo--tamaño"/></Link>   
            </div>
            <div>
                <div className="barraNavegacion__items">
                    <div>
                        <Link to={'/home'} className="barraNavegacion__items--estilos">Home
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" className="barraNavegacion__items--iconos"/>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/pokemon'} className="barraNavegacion__items--estilos">Pokémon
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" className="barraNavegacion__items--iconos"/>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/equipo'} className="barraNavegacion__items--estilos">Equipo
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" className="barraNavegacion__items--iconos"/>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/ayuda'} className="barraNavegacion__items--estilos">Ayuda
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" className="barraNavegacion__items--iconos"/>
                        </Link>
                    </div>
                        
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;