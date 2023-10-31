import Player from "./Player"
import players from "./players"
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerList=()=>{
    
    return(
        <div className="container">
    {players.map((e)=> <Player props={e}/>)} 
  
  </div> ) 
}
export default PlayerList