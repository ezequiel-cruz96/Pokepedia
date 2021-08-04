import React,{useState,useEffect, useContext} from 'react';
import PokemonList from './PokemonList';
import {AppContext} from '../context/context'
import './PokemonList.css';


function PokemonListContainer(){


    let {obtenerTipo}  = useContext(AppContext);

    let [pokemon, setPokemon] = useState([]);

    let [generacion, setGeneracion] = useState("primera");

    let cantPokemon;

    let offset;

  useEffect(() => {
      
          fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantPokemon}&offset=${offset}`)
              .then((response) => response.json())
              .then((data) => setPokemon(data.results))
  }, []);

  function primera(){
    return setGeneracion("primera")
  }
  function segunda(){
    return setGeneracion("segunda")
  } 
   function tercera(){
    return setGeneracion("tercera")
  }
  function cuarta(){
    return setGeneracion("cuarta")
  }
  function quinta(){
    return setGeneracion("quinta")
  }
  
function all(){
  obtenerTipo("all") 
}
function grass(){
  obtenerTipo("grass") 
}

function fire(){
  obtenerTipo("fire") 
}
function water(){
  obtenerTipo("water") 
}
function bug(){
  obtenerTipo("bug") 
}
function normal(){
  obtenerTipo("normal") 
}
function poison(){
  obtenerTipo("poison") 
}
function electric(){
  obtenerTipo("electric") 
}
function ground(){
  obtenerTipo("ground")  
}
function fighting(){
  obtenerTipo("fighting")  
}
function rock(){
  obtenerTipo("rock")  
}
function ghost(){
  obtenerTipo("ghost")  
}
function psychic(){
  obtenerTipo("psychic")  
}
function dragon(){
  obtenerTipo("dragon")  
}
function ice(){
  obtenerTipo("ice")  
}
function fairy(){
  obtenerTipo("fairy")  
}


if(generacion==="primera"){
  cantPokemon=151;
  offset=0
}
if(generacion==="segunda"){
  cantPokemon=100;
  offset=151;
}
if(generacion==="tercera"){
  cantPokemon=135;
  offset=286;
}
if(generacion==="cuarta"){
  cantPokemon=108;
  offset=395
}
if(generacion==="quinta"){
  cantPokemon=99;
  offset=550
}

console.log(generacion);

  return(
    <>
    <div className="btn-group" role="group">
    <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Filtrar por generación
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" x-placement="bottom-start" >
      <button className="dropdown-item" onClick={primera} >Primer generación</button>
      <button className="dropdown-item" onClick={ () => segunda() } >Segunda generación</button>
      <button className="dropdown-item" onClick={tercera} >Tercer generación</button>
      <button className="dropdown-item" onClick={cuarta} >Cuarta generación</button>
      <button className="dropdown-item" onClick={quinta} >Quinta generación</button>
      
    </div>
  </div>






<div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Filtrar por tipo
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="bottom-start" >
      <button className="dropdown-item" onClick={all}>Todos</button>
      <button className="dropdown-item" onClick={grass}>Grass</button>
      <button className="dropdown-item" onClick={fire} >Fire</button>
       <button className="dropdown-item" onClick={water} >Water</button>
      <button className="dropdown-item" onClick={bug} >Bug</button>
      <button className="dropdown-item" onClick={normal} >Normal</button>
      <button className="dropdown-item" onClick={poison} >Poison</button>
      <button className="dropdown-item" onClick={electric} >Electric</button>
      <button className="dropdown-item" onClick={ground} >Ground</button>
      <button className="dropdown-item" onClick={fighting} >Fighting</button>
      <button className="dropdown-item" onClick={rock} >Rock</button>
      <button className="dropdown-item" onClick={ghost} >Ghost</button>
      <button className="dropdown-item" onClick={psychic} >Psychic</button>
      <button className="dropdown-item" onClick={dragon} >Dragon</button>
      <button className="dropdown-item" onClick={ice}>Ice</button>
      <button className="dropdown-item" onClick={fairy} >Fairy</button>
    </div>
  </div>

  
      <div className="contenedor__cartas">
      { 
        
        pokemon.map((el)=>{
         
          return(
          <>
          <PokemonList datos={el.url}  key={el} />

          </>
          )
        
        })

      }
      </div>
      
      </>
  )
}

export default PokemonListContainer;