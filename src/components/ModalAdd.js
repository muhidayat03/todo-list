import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ModalAdd = ({ show, setShow }) => {


  return <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-custom-modal-styling-title">
        Add To Do
          </Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <Form>
        <Form.Group controlId="formBasicEmail">

          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'row-reverse' }}>
          <Button variant="primary" type="submit">
            Submit
       </Button>
        </div>
      </Form>




    </Modal.Body>
  </Modal>


}


export default ModalAdd;