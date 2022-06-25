import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTask = () => {
    return (
        <div>
            <h2>Add Task</h2>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" />
     </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default AddTask;