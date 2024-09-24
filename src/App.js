import './App.css';
import logo from './logo.svg';

import {Row, Card, Button, CardGroup} from "react-bootstrap";

import CardLED from "./components/CardLED";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Row {/*xs={1} md={2}*/} className={"g-4"}>
                    <CardLED cardTitle={'ESP 1'} address={'192.168.1.101'} key={1} />
                    <CardLED cardTitle={'ESP 1'} address={'192.168.1.102'} key={2} />
                    <Button style={{flexGrow: 1, fontSize: '2rem'}}><FontAwesomeIcon icon={faPlus} key={0} /></Button>
                </Row>
            </header>
        </div>
    );
}

export default App;
