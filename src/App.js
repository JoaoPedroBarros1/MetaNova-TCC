import './App.css';
import {useState} from "react";
import logo from './logo.svg';

import {Button, Form} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [ledValue, setLedValue] = useState('off')

    const formSubm = function () {
        fetch('http://192.168.1.145/?led='+ledValue, {
            method: 'POST',
            mode: 'no-cors',
            body: 'on'
        })

        if (ledValue === 'on') {
            setLedValue('off')
        } else {
            setLedValue('on')
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <p>{ledValue}</p>
            <Button onClick={formSubm}
                name={"led"}
                value={ledValue}
            >
                <FontAwesomeIcon icon={faCoffee} />
            </Button>
        </div>
    );
}

export default App;
