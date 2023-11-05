import Player from "./Player"
import players from "./players"
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerList=()=>{
    
    return(
  <div className="playerListcontainer">
   {players.map((e)=> <Player props={e}/>)} 
  
  </div> ) 
}
export default PlayerList