import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
    const[singleTodo,setSigleTodo] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/tasks/${id}`)
        .then(res=>res.json())
        .then(data=>setSigleTodo(data))
    },[]);
    return (
        <div>
            <h2>Update your todo:{id}</h2>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" value={singleTodo.title} onChange={handleUpadateTitle} className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" value={singleTodo.description} onChange={handleUpadateDesc}  type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Created Date</Form.Label>
    <Form.Control name="date" value={singleTodo.date} onChange={handleUpadateDate}  type="date" />
    </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default UpdateTodo;