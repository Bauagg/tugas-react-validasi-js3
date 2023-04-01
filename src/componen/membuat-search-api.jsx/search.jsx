import { InputGroup, Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Datas } from "./api";
import "./modul.css"



const Componenbrita = () => {
    const [brita, setBrita] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        Datas()
            .then((respos) => setBrita(respos))
    }, []);

    const hendelInput = async () => {
        setBrita(await Datas(search))
    }



    return (
        <div>
            <div className="search">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="search"
                        type="text"
                        onChange={(event) => setSearch(event.target.value)} />

                    <Button
                        variant="outline-secondary"
                        id="button-addon2" onClick={hendelInput}>
                        Button
                    </Button>
                </InputGroup>
            </div>
            <div className="conten">
                <Container className="cons">
                    <Row>
                        {
                            brita.map(index => {
                                return (
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" key={index.id} src={index.urlToImage} />
                                        <Card.Body>
                                            <Card.Title key={index.id}>{index.title}</Card.Title>
                                            <Card.Text key={index.id}>
                                                {index.description}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Componenbrita;




