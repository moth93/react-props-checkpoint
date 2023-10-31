import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Player=({props})=>{
return <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Image} className="imageCard" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            Team: {props.team} <br/>
            nationality: {props.nationality}
            jersynumber: {props.jerseynumber}
            age: {props.age}
        </Card.Text>  
      </Card.Body>
    </Card>
</>
}
export default Player