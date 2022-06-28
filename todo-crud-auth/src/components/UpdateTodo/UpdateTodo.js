import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Update your todo:{id}</h2>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Created Date</Form.Label>
    <Form.Control name="date" type="date" />
    </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default UpdateTodo;