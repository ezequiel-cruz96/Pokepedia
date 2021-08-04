import React, { useState, useContext } from 'react';
import { createContext} from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){

    const [tipo, setTipo]=useState("grass")

    const [team, setTeam]=useState([])

    function obtenerTipo(string){
        setTipo(string)
    }

    function addTeam(add){
        setTeam(add)
    }
    
    function EliminarItem(id){
        let CartNuevo= team.filter((el)=>
        el.id!==id
        )
        setTeam(CartNuevo)
      }


    return(
        <AppContext.Provider value={
            {tipo,obtenerTipo,team,addTeam,EliminarItem}
        }
        >
        
       
    
    
        {children}
        </AppContext.Provider>
        
      )
    }