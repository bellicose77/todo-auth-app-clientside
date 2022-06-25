import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTask = () => {
    const [tasks,setTasks] = useState({tittle:'',description:'',date:''})

    const handelSubmit = e =>{
        e.preventDefault();
        console.log("Handle submit");
       
    }
    return (
        <div>
     <h2>Add Task</h2>

    <Form onSubmit={handelSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Created Date</Form.Label>
    <Form.Control type="date" />
    </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );
};

export default AddTask;