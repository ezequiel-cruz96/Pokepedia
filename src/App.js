import './App.css';
import Greeting from './components/Greeting page/greeting';
import Homepage from './components/Homepage/homepage';
import Pokemonpage from './components/Pokemon page/pokemonpage';
import Teampage from './components/Team page/teampage';
import Helppage from './components/Help page/helppage';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PokemonListContainer from './components/containers/PokemonListContainer';
import DetailListContainer from './components/containers/DetailListContainer/DetailListContainer';
import AppContextProvider from './components/context/context';


function App() {
  return (
    <>
    <AppContextProvider>
   <BrowserRouter>
   <Switch>
     <Route exact path="/">
       <Greeting/>
     </Route>
  
     <Route exact path="/home">
     <Navbar/>
     <Homepage/>
     </Route>

     <Route exact path="/pokemon">
     <Navbar/>
     <Pokemonpage/>
     </Route>

     <Route exact path="/pokemon/:id">
     <Navbar/>
     <DetailListContainer/>
     </Route>
     
     <Route exact path="/equipo">
     <Navbar/>
     <Teampage/>
     </Route>
    
   
    </Switch>

</BrowserRouter> 
</AppContextProvider>
    
    </>
  );
}

export default App;
