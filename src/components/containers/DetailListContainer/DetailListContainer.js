import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom';
import './DetailListContainer.css';

function DetailListContainer(){

    const{id}= useParams();

    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
      
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => setDetalle([data]));
}, []);

    const [info, setInfo] = useState([]);

    useEffect(() => {
    
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then((response) => response.json())
            .then((data) => setInfo([data]));
    }, []);

    return(

        <>
    <>
    {detalle.map((el)=>{
    
        return(
            <> 
            <h1 className="titulo">{el.name}</h1>

            <div className="contenedor__detalle">
                  <div className="contenedor__imagen">
                        <img src="\Imagenes\Pokemon page\bg-pattern-card.svg" alt=""className="contenedor__detalle--imagen1" />
                        <img src={el.sprites.other.dream_world.front_default} alt="" className="contenedor__detalle--imagen"/>
                  </div>
                  <div className="contenedor__detalle--info">

                    <div className="contenedor__detalle--titulo">Estadísticas de Base</div>

                    <div className="contenedor__detalle--stats">
                        <div>Hp: {el.stats[0].base_stat}</div>
                        <div>Ataque: {el.stats[1].base_stat}</div>
                        <div>Defensa: {el.stats[2].base_stat}</div>
                    </div>
                    <div className="contenedor__detalle--stats">
                        <div>Exp: {el.base_experience}</div>
                        <div>Especial: {el.stats[3].base_stat}</div>
                        <div>Peso: {el.weight}</div>
                    </div>
                    <div>{
                    info.map((el)=>{
                        return(
                        <div>
                            {el.flavor_text_entries[34].flavor_text}
                        </div>
                            )
                        })}
                    </div>

                  </div>   
            </div>
            
            </>
        )

    })
    
    }
    </>

    <Link to={"/pokemon"}>
        <button className="btn btn-primary">Volver</button>
    </Link>
    

</>
    )
}

export default DetailListContainer;