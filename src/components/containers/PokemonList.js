import React, { useState, useContext, Children,useEffect } from 'react';
import {AppContext} from '../context/context'
import {Link} from 'react-router-dom';


function PokemonList({datos}){

    const {obtenerTipo,tipo}  = useContext(AppContext);

    let [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        
            fetch(`${datos}`)
                .then((response) => response.json())
                .then((data) => setPokedex([data]) );
    }, [])

    let filtro;

    filtro = pokedex.filter((el)=>
    el.types[0].type.name==tipo  
    )

    if(tipo==="all"){
        filtro = pokedex
    }
    

    function typePokemon(condicion){

        let config;
    
        let config1={
            class1:"condicion1",
            class2:"condicion2",
            class3:"condicion3",
            class4:"condicion4",
            class5:"condicion5",
            class6:"condicion6",
            class7:"condicion7",
            class8:"condicion8",
            class9:"condicion9",
            class10:"condicion10",
            class11:"condicion11",
            class12:"condicion12",
            class13:"condicion13",
            class14:"condicion14",
            class15:"condicion15"
        }
    
        if(condicion==="grass"){
           return config=config1.class1
        }
        if(condicion==="fire"){
         return config=config1.class2
         }
        if(condicion==="water"){
        return  config=config1.class3
            }
        if(condicion==="bug"){
        return  config=config1.class4
            }
        if(condicion==="normal"){
        return  config=config1.class5
            }
        if(condicion==="poison"){
        return  config=config1.class6
            }
        if(condicion==="electric"){
        return  config=config1.class7
            }
        if(condicion==="ground"){
        return  config=config1.class8
            }
        if(condicion==="fighting"){
        return  config=config1.class9
            }
        if(condicion==="rock"){
        return  config=config1.class10
            }
        if(condicion==="ghost"){
        return  config=config1.class11
            }
        if(condicion==="psychic"){
        return  config=config1.class12
            }
        if(condicion==="dragon"){
        return  config=config1.class13
            }
        if(condicion==="ice"){
        return  config=config1.class14
            }
        if(condicion==="fairy"){
        return  config=config1.class15
            }
                                             
    }
    
        return(
            <>
            {
                filtro.map((el)=>{

                    let config;
                    
                    let tipoPokemon =el.types[0].type.name
    
                    config=(typePokemon(tipoPokemon))
                      
                    return(
                        <div class="card">
                        <div className={config}></div>
                                <div class="card-body">
                                    <img src={el.sprites.other.dream_world.front_default} alt="" class="card-body-img"/>
                                    <h1 class="card-body-title">
                                    {el.name}
                                        <span> Hp {el.stats[0].base_stat}</span>
                                    </h1>
                                    <p class="card-body-text"> Exp {el.base_experience}</p>
                                    <Link to={`/pokemon/${el.id}`}>
                                        <button type="button" className="btn btn-primary">Detalle</button>
                                    </Link>
                                </div>
                                <div class="card-footer">
                                    <div class="card-footer-social">
                                        <h3>{el.stats[1].base_stat}</h3>
                                        <p>Ataque</p>
                                    </div>
                                    <div class="card-footer-social">
                                        <h3>{el.stats[3].base_stat}</h3>
                                        <p>Especial</p>
                                    </div>
                                    <div class="card-footer-social">
                                        <h3>{el.stats[2].base_stat}</h3>
                                        <p>Defensa</p>
                                    </div>
                                </div>
                        </div>
                  
                    )
                    
                })
            }
    
            
    
            </>
    )
}

export default PokemonList;