import {useState} from "react";
import {Card, Col, Form} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb, faFaceFrown} from "@fortawesome/free-solid-svg-icons";


function CardLED({cardTitle, address, key}) {
    const [isActive, setIsActive] = useState(false)
    const [isConnected, setIsConnected] = useState(true)


    const sendRequest = async function () {
        let ledVal = 'on'
        if (isActive) {
            ledVal = 'off'
        }

        setIsActive(!isActive)
        try {
            await fetch('http://' + String(address) + '/?led=' + ledVal, {
                method: 'POST',
                mode: 'no-cors'
            })
        } catch (e) {
            console.log("Fetch", e)
            setIsConnected(false)
        }
    }

    return (
        <Col key={key}>
            <Card style={{width: 'max-content', height: 'max-content'}}>
                <Card.Body>
                    <Card.Title>{cardTitle} <FontAwesomeIcon icon={faLightbulb} /></Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Form style={{display: 'flex'}}>
                        <Form.Switch label={isActive ? 'on' : 'off'} onClick={sendRequest} />
                    </Form>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CardLED