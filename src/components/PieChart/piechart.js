import React,{useContext} from 'react';
import { Pie } from 'react-chartjs-2';
import {AppContext} from '../context/context';

function PieChart(){


  let {team} = useContext(AppContext);

  let ataque=0
  let defensa=0
  let especial=0

  let stats={
    ataque:0,
    defensa:0,
    especial:0,
  }

    team?.map((el)=>{

      ataque =el.stats[1].base_stat+ ataque
      defensa =el.stats[3].base_stat+ defensa
      especial= el.stats[2].base_stat+ especial

      stats={
        ataque:ataque,
        defensa:defensa,
        especial: especial,
      }
      
            return stats
    })

    const data = {
        labels: ['Ataque', 'Defensa','Especial',],
        datasets: [
          {
            label: '# of Votes',
            data: [stats.ataque,stats.defensa, stats.especial],
            backgroundColor: [
              `red`,
              'blue',
              'orange',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
      


    return(
        <>
            <Pie data={data} />
        </>
    )
}
export default PieChart;
