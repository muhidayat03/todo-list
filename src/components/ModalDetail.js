import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { renderInput, renderSelect } from './FormComponent'
import { reduxForm, Field } from "redux-form";
import { useDispatch } from "react-redux";
import { addTodo } from '../actions/todo_action';
import { connect } from "react-redux";


let ModalDetail = ({ show, setShow, action, handleSubmit, reset }) => {

  const dispatch = useDispatch();

  const onSubmit = ({ title, description, id, status }) => {
    dispatch(addTodo(id));
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
          disabled
        />
        <Field
          name="description"
          placeholder="Description"
          component={renderInput}
          disabled
        />
        <Field
          name="status"
          placeholder="Status"
          component={renderSelect}
          disabled
        />
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'row-reverse' }}>
          <Button variant="primary" type="button" onClick={() => setShow(false)}>
            Close
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


ModalDetail = reduxForm({
  // a unique name for the form
  form: "ModalDetail",
  validate: validate,
  // keepDirtyOnReinitialize: true,
  shouldError: () => true,
  enableReinitialize: true,
})(ModalDetail);


ModalDetail = connect(({ listTodo }) => {
  let initialValues = {};
  if (listTodo.selected) {
    const {
      title, status, description,
    } = listTodo.selected;
    initialValues = {
      title,
      status,
      description,

    };
  }
  return { initialValues: initialValues };
})(ModalDetail);

export default ModalDetail;