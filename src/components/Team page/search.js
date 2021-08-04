import React,{ useState, useEffect, useContext} from 'react';
import Catch from './catch';
import { AppContext } from '../context/context';
import './search.css';


function Search({pokemon}){


    let [search , setSearch] = useState()

    let {addTeam,team} = useContext(AppContext);

        useEffect(() => {      
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
            .then((data) => setSearch([data]));
}, [pokemon]) 

    if(pokemon==""){
        return pokemon=null 
    }

    function EstadoCarrito (id) {
        return team.some(item => item.id === id)
      }


    function addPokemon(id,add){

        let estado= EstadoCarrito(id);

        if(estado){
            return add
        }else{
            let aux= [...team]
            aux.push(add);
            addTeam(aux)
        }
      
    }

    return(
        <>
         
     <div className="contenedor__busqueda">
        {
            search?.map((el)=>{

                return(
                    <div class="card">
                    <div className="equipo"></div>
                            <div class="card-body">
                                <img src={el.sprites.other.dream_world.front_default} alt="" class="card-body-img"/>
                                <h1 class="card-body-title">
                                {el.name}
                                    <span> Hp {el.stats[0].base_stat}</span>
                                </h1>
                                <p class="card-body-text"> Exp {el.base_experience}</p>
                                <div>
                                    <button type="button" class="button-add" onClick={ () => addPokemon(el.id,el) }>
                                    <img src="\Imagenes\Greeting page\icono-pokebola.png" alt="" className="card-add" /> 
                                    </button>
                                </div>

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
    </div>   


        </>
    )
}

export default Search;