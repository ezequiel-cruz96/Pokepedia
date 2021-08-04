import React,{ useState, useEffect,useContext} from 'react';
import Catch from './catch.js';
import Search from './search';
import {AppContext} from '../context/context';
import PieChart from '../PieChart/piechart.js';


function Teampage(){

    let [buscarPokemon , setBuscarPokemon] = useState(["pikachu"])

    let {addTeam,team} = useContext(AppContext);

    function handleSubmit(e){
        e.preventDefault()
    }
     const handleEnviar = (event) => {
        setBuscarPokemon(event.target.value )
    }

    return(
        <>
            <div className="contenedor__formulario">

                <h1>Captura tu equipo</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={buscarPokemon}  onChange={handleEnviar} name="name"  placeholder="Búsqueda" className="contenedor__formulario--form" />             
                </form> 
            </div>

                <Search pokemon={buscarPokemon}/>
                
            <h1>Tu Equipo</h1>

            <div className="contenedor__equipo">
            <div className="contenedor_grafico">
                    <PieChart/>
                </div>
                <div className="contenedor_catch"> 
                    <Catch equipo={team}/>
                </div>               
            </div>
            
        </>
    )
}

export default Teampage;