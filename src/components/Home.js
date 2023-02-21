import { Component } from "react";
import { Card } from "react-bootstrap";
import "../styling/Home.css";
import "../resources/gmyPicture.jpg"

export default class Home extends Component {
    render() {
        return (
            <Card className="card">
                {/* <Card.Header>Created by Justin Lowell</Card.Header> */}
                <Card.Body className="cardBody">
                    <div>
                        <h1>Workout And Nutrition In One Place... <br /> Now That is Smart</h1>
                        <p>"The mind is the limit. As long as the mind can envision the fact that you can do something, <br /> you can do it, as long as you really believe 100 percent."</p>
                        <h2>- Arnold Schwarzenegger</h2>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}