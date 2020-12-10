import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { renderInput, renderSelect } from './FormComponent'
import { reduxForm, Field } from "redux-form";
import { useDispatch } from "react-redux";
import { editTodo } from '../actions/todo_action';
import { connect } from "react-redux";


let ModalEdit = ({ show, setShow, action, handleSubmit, reset, }) => {

  const dispatch = useDispatch();

  const onSubmit = ({ title, description, id, status }) => {
    let param = {
      title,
      description,
      status: Number(status),
      createdAt: new Date(),
      id: id
    };
    dispatch(editTodo(param));
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
        Edit To Do
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
        <Field
          name="status"
          placeholder="Status"
          component={renderSelect}
        >
          <option></option>
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </Field>
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="secondary" type="button" onClick={() => setShow(false)} style={{ marginRi: 10 }}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Save
          </Button>

        </div>
      </Form>
    </Modal.Body >
  </Modal >


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