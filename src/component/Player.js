import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Player=({props})=>{
return <>
<div className="cardBodycontainer" >
<Card id="CardContainer" >
<Card.Title id="CardTitle">{props.name}</Card.Title>
      <Card.Img variant="top" src={props.Image} id="imageCard" />
      <Card.Body id="cardBody" >
        <Card.Text id="CardText" >
            Team: {props.team} <br/>
            Nationality: {props.nationality} <br/>
            Jersynumber: {props.jersynumber} <br/>
            Age: {props.age} <br/>
        </Card.Text>  
      </Card.Body>
    </Card>
    </div>
</>
}
export default Player