import React from "react";
import Form from 'react-bootstrap/Form';


export function renderInput(field) {
  return (
    <Form.Group>
      <Form.Label>{field.placeholder}</Form.Label>
      <Form.Control
        {...field.input} type="text" placeholder={field.placeholder} disabled={field.disabled} />
      {  field.meta.touched && field.meta.error &&
        <Form.Text className="text-muted">
          {field.meta.error}
        </Form.Text>
      }
    </Form.Group>
  );
}


export function renderSelect(field) {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>{field.placeholder}</Form.Label>
      <Form.Control as="select"  {...field.input} disabled={field.disabled}
        placeholder={field.placeholder}
        onChange={(event) => field.input.onChange(event.target.value)}
      >
        <option value={0}>To Do</option>
        <option value={1}>Done</option>
      </Form.Control>
    </Form.Group>
  );
} 
