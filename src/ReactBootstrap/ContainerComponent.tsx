
import React, { useState } from 'react'
import { Form, Button, Table, Container, Row, Col, Modal } from 'react-bootstrap'



const ContainerComponent = () => {
    const [show, setShow] = useState(false);
    const [displayUserName, setDisplayUserName] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (event: any) => {
        console.log(event.target.checked);
        setDisplayUserName(event.target.checked);
    }

  return (
    <div>
        <Container>
        
        <br /><br />
        <Container>
             <Row>
                <Col md={{ span: 2, offset: 10 }}>
                    <Button variant="outline-primary" onClick={handleShow}>Create User</Button>
                </Col>
            </Row>
        </Container>
           
        <br />
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show user name" 
                            
                            onClick={handleClick}
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName" 
                        style={{ display: `${displayUserName ? 'block' : 'none'}` }}>

                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    
                    {/* <Button variant="primary" type="submit">
                        Save data
                    </Button> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save data
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ContainerComponent