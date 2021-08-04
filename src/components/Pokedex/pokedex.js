import React,{useState,useEffect} from 'react';
import './pokedex.css';

function Pokedex(){
    

    let date = new Date();

    let dateFormat = date.toDateString();

    let [contador, setContador] = useState(0);

    let [selector, setSelector] = useState(1);

    let [informacion, setInformacion] = useState(0);

    let [evolucion, setEvolucion] = useState(0);

    let [time, setTime] = useState(0);

    
    
    function handleOn(){
        if(contador==0){
            setContador(contador+1)
            setSelector(0)
        }
        else{
            setContador(0)
            setSelector(selector-3)
            setEvolucion(0)
            setInformacion(0)
        }
        
    }

    function handleLeft(){
        setSelector(selector-3)
    }

    function handleRight(){
        setSelector(selector+3)
    }
    if(selector<=0){
        setSelector(1)
    }

    function handleTime(){
        if(time==0){
            setTime(time+1)
           
        }
        else{
            setTime(0)
           
        }
        
    }

    function handleInformacion(){

        if(informacion==0){
            setInformacion(informacion+1)
            setEvolucion(0)
           
        }
        else{
            setInformacion(0)
           
        }
    }

    function handleEvolucion(){

        if(evolucion==0){
            setEvolucion(evolucion+1)
            setInformacion(0)
           
        }
        else{
            setEvolucion(0)
           
        }
    }
    

    return(
        <>
        <div className="contenedor__pokedex">
            <div className="contenedor__pokedex--borde">

                <div className="contenedor__pokedex--pokemon">
                    <div className="contenedor__pokedex--titulo">
                        {(contador==1)?(
                              <div>Pokemon #{selector}</div>
                        ):(
                            <div>Pokemon</div>
                        )}
                      
                        </div>
                        <div className="contenedor__pokedex--centro">
                    <div className="contenedor__pokedex--imagen">
                        
                        {
                            (contador==1) ?(<>
                            <div className="contenedor__pokedex--pantalla">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selector}.png`} alt="" className=" contenedor__pokedex--tamaño"/>

                            </div>
                            </>
                            )
                            :(<div className="contenedor__pokedex--pantalla"></div>)
                        }
                        
                    </div>
                    </div>
                    <div className="contenedor__pokedex--encendido">
                        
                        <div className="contenedor__pokedex--start">
                            <button className="power__button" onClick={handleOn}>
                                {(contador==0) ? (
                                   
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="power" viewBox="0 0 16 16">
                                   <path d="M7.5 1v7h1V1h-1z"/>
                                   <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                                   </svg>
                                   
                                ):(
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="power1" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1h-1z"/>
                                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                                    </svg>
                                    
                                )
                            }
                                
                            </button>
                    </div>
                        <div className="contenedor__pokedex--flecha">
                            <div>
                                <button onClick={handleLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16"  className="contenedor__pokedex--izquierda">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={handleRight}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="contenedor__pokedex--derecha" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div> 

                <div className="contenedor__pokedex--eje">
                    <div className="contenedor__pokedex--separacion"></div>
                    <div className="contenedor__pokedex--separacion"></div>
                    <div className="contenedor__pokedex--separacion"></div>
                </div> 

                <div className="contenedor__pokedex--info">
                    
                    <div className="contenedor__pokedex--tiempo">
                        <div className="contenedor__pokedex--tiempo--hora">
                            {(contador==1)&&(time==1)?(
                                <div>{dateFormat}</div>
                            ):
                            ("")
                            
                            }
                        </div>
                        <div>
                            <button  onClick={handleTime}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="hora" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div>
                            {contador==0?(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="wifi1" viewBox="0 0 16 16">
                                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                                </svg>
                            ):
                            (<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="wifi" viewBox="0 0 16 16">
                            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                            </svg>
                            )
                            
                            }
                            
                            </div>
                        </div>
                    </div>
                    <div className="contenedor__pokedex--evo">
                        {
                            ((informacion==1)&&(contador==1)&&(evolucion==0))?(<>
                                { <div className="contenedor__pokedex--evo--info">
                                    <div className="contenedor__pokedex--evo--info2">
                                        Pokédex
                                    </div>
                                    <div className="contenedor__pokedex--evo--info3"> 
                                        Es una enciclopedia electrónica portátil para registrar todas las especies Pokémon.
                                    </div>
                                </div> }                   
                            </>
                            )
                            :("")
                        }
                        {((contador==1)&&(informacion==0)&&(evolucion==1)) ? (<>
                             <div>
                             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selector}.png`} alt="" className="contenedor__pokedex--evo--pokemon"/>
                          </div>
                          <div >
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selector+1}.png`} alt=""  className="contenedor__pokedex--evo--pokemon"/>
                          </div>
                          <div>
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selector+2}.png`} alt=""  className="contenedor__pokedex--evo--pokemon"/>
                          </div>
                            </>
                        ):("")
                        }
                       
                    </div>

                    <div className="contenedor__pokedex--botones">
                        <button className="boton_informacion" onClick={handleInformacion}>Información</button>
                        <button className="boton_evoluciones" onClick={handleEvolucion}>Evoluciones</button>
                    </div>
                    <div className="contenedor__pokedex--pokedex">
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-1.png" alt="" className="contenedor__pokedex--pokedex--imagen"/>
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-2.png" alt="" className="contenedor__pokedex--pokedex--imagen"/> 
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-3.png" alt="" className="contenedor__pokedex--pokedex--imagen"/> 
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-4.png" alt="" className="contenedor__pokedex--pokedex--imagen"/> 
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-5.png" alt="" className="contenedor__pokedex--pokedex--imagen"/>
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-6.png" alt="" className="contenedor__pokedex--pokedex--imagen"/>
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-7.png" alt="" className="contenedor__pokedex--pokedex--imagen"/> 
                        </div> 
                        <div>
                            <img src="\Imagenes\Home page\medallas\medalla-8.png" alt="" className="contenedor__pokedex--pokedex--imagen" /> 
                        </div> 
                    </div>
                </div> 

            </div>
        </div>


        </>
    )
}

export default Pokedex;