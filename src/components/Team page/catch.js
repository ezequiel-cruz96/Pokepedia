import React,{useState,useContext} from "react";
import {AppContext} from '../context/context'
import PieChart from "../PieChart/piechart";

function Catch({equipo}){

    let {EliminarItem} = useContext(AppContext);

    return(
        <>
        {
            equipo.map((el)=>{

            

                return(
                    <>
                     <div class="card">
                    <div className="equipo"></div>
                            <div class="card-body">
                                <img src={el.sprites.other.dream_world.front_default} alt="" class="card-body-img"/>
                                <h1 class="card-body-title">
                                {el.name}
                                    <span> Hp {el.stats[0].base_stat}</span>
                                </h1>
                                <p class="card-body-text"> Exp {el.base_experience}</p>
                                <button type="button" class="button-add-open"  onClick={ () => EliminarItem(el.id) }>
                                <img src="\Imagenes\Greeting page\pokebola-abierta.svg" alt="" className="card-add" /> 
                                </button>
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


                    </>
                )
            })
        }
   
        </>
    )
}

export default Catch;