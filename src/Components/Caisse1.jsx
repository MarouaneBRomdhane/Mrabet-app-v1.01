import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

// import "./Caisse1.css";

function Caisse1() {
  const [montantCheque, setMontantCheque] = useState(0);
  const [numeroCheque, setNumeroCheque] = useState(0);
  const [chequeStatements, setChequeStatements] = useState([]);
  const [montantTpe, setMontantTpe] = useState(0);
  const [numeroTpe, setNumeroTpe] = useState(0);
  const [tpeStatements, setTpeStatements] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card
      style={{
        width: "28rem",
        marginTop: "30px",
        backgroundColor: "rgba(0, 126, 127, 0.75)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#FFF7D6",
          }}
        >
          <h1>Caisse1 </h1>
        </Card.Title>
        <Card.Text style={{ color: "#FFF7D6", fontSize: "25px" }}>
          Recette
        </Card.Text>
        <Card.Text style={{ color: "#FFF7D6", fontSize: "25px" }}>
          Espece
        </Card.Text>

        {/* accordion for Cheque && TPE statemens */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Cheque stamtements</Accordion.Header>
            <Accordion.Body>Cheque N°: Montant:</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tpe statements</Accordion.Header>
            <Accordion.Body>Tpe transaction N°: Montant:</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* button to open modal */}
        <Button
          style={{
            marginTop: "10px",
            border: "0px",
            backgroundColor: "#005166",
            color: "#FFF7D6",
            fontSize: "20px",
          }}
          onClick={handleShow}
          className="button-show-modal"
        >
          Editer journée
        </Button>

        {/* MODAL */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Journée du {Date(24, 0, 2022)} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Recette</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Inserer le montant du ticket de caisse"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Liquide en caisse</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Inserer le montant du liquide disponible en caisse"
                  autoFocus
                />
              </Form.Group>
            </Form>

            {/* FIelds to add single CHEQUE statments */}
            <Row className="mb-1">
              <h5 className="mb-0.5" style={{}}>
                Cheques
              </h5>
            </Row>
            <Row className="mb-1">
              <Form.Label
                column
                md={6}
                sm={6}
                className="mb-0.5 mt-0.5 d-flex align-items-center"
                style={{}}
              >
                Montant
                <Form.Control
                  type="number"
                  placeholder="Montant"
                  style={{ marginLeft: "15px" }}
                />
              </Form.Label>
              <Form.Label
                column
                md={4}
                sm={4}
                className="mb-0.5 mt-0.5 d-flex align-items-center"
                style={{}}
              >
                N°
                <Form.Control
                  type="number"
                  style={{ marginLeft: "15px" }}
                  placeholder="N°"
                />
              </Form.Label>
              {/* Button on the same line to add signle cheque statement*/}
              <Col md={2} sm={2} ml={1} className="d-flex align-items-center">
                <Button
                  variant="primary"
                  style={{ width: "80px", marginLeft: "-15px" }}
                >
                  Ajouter
                </Button>
              </Col>
            </Row>

            {/* FIelds to add single TPE statments */}
            <Row className="mb-1">
              <h5 className="mb-0.5" style={{}}>
                Cheques
              </h5>
            </Row>
            <Row className="mb-1">
              <Form.Label
                column
                md={6}
                sm={6}
                className="mb-0.5 mt-0.5 d-flex align-items-center"
                style={{}}
              >
                Montant
                <Form.Control
                  type="number"
                  placeholder="Montant"
                  style={{ marginLeft: "15px" }}
                />
              </Form.Label>
              <Form.Label
                column
                md={4}
                sm={4}
                className="mb-0.5 mt-0.5 d-flex align-items-center"
                style={{}}
              >
                N°
                <Form.Control
                  type="number"
                  style={{ marginLeft: "15px" }}
                  placeholder="N°"
                />
              </Form.Label>
              {/* Button on the same line to add signle cheque statement*/}
              <Col md={2} sm={2} className="d-flex align-items-center">
                <Button
                  variant="primary"
                  style={{ width: "80px", marginLeft: "-15px" }}
                >
                  Ajouter
                </Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default Caisse1;
