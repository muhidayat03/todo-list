import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { deleteTodo } from '../actions/todo_action';
import { connect } from "react-redux";


let ModalEdit = ({ show, setShow, action, handleSubmit, reset, initialValues }) => {

  const dispatch = useDispatch();

  const onSubmit = ({ title, description, id }) => {
    dispatch(deleteTodo(id));
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
        Delete To Do
          </Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        Are You Sure delete '{initialValues.title}' from to do?
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="secondary" type="button" onClick={() => setShow(false)} style={{ marginRight: 10 }}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Save
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


ModalEdit = reduxForm({
  // a unique name for the form
  form: "ModalEdit",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(ModalEdit);


ModalEdit = connect(({ listTodo }) => {
  let initialValues = {};
  if (listTodo.selected) {
    const {
      title, status, description, id
    } = listTodo.selected;
    initialValues = {
      title,
      status,
      description,
      id
    };
  }
  return { initialValues: initialValues };
})(ModalEdit);

export default ModalEdit;