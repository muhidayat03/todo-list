import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { renderInput } from './FormComponent'
import { reduxForm, Field } from "redux-form";
import { useDispatch } from "react-redux";
import { addTodo } from '../actions/todo_action';


let ModalAdd = ({ show, setShow, action, handleSubmit, reset }) => {
  const dispatch = useDispatch();
  const onSubmit = ({ title, description }) => {
    let param = {
      title,
      description,
      status: 0,
      createdAt: new Date()
    };
    dispatch(addTodo(param));
    setShow(false);
    reset();
  };


  return <Modal
    action={action}
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

      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Field
          name="title"
          placeholder="Title"
          component={renderInput}
        />
        <Field
          name="description"
          placeholder="Description"
          component={renderInput}
        />
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'row-reverse' }}>
          <Button variant="primary" type="submit">
            Submit
       </Button>
        </div>
      </Form>




    </Modal.Body>
  </Modal>


}

function validate(values) {
  const { title, description } = values;
  const errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }

  return errors;
}


ModalAdd = reduxForm({
  // a unique name for the form
  form: "ModalAdd",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(ModalAdd);

export default ModalAdd;