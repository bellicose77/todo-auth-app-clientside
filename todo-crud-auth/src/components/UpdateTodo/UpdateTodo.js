import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
    const[singleTodo,setSigleTodo] = useState({})
    const {id} = useParams();
    const handleUpdateTitle = e =>{
        const updateTitle = e.target.value;
        console.log(updateTitle);
    }
    const handleUpdateDesc = e =>{
        const updateDesc = e.target.value;
    }
    const handleUpdateDate = e =>{
        const updateDate = e.target.value;
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/tasks/${id}`)
        .then(res=>res.json())
        .then(data=>setSigleTodo(data))
    },[]);
    return (
        <div>
    <h2>Update your todo:{id}</h2>
    <Form onSubmit={handleUpdateSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control name="title" value={singleTodo.title} onChange={handleUpdateTitle} className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" value={singleTodo.description} onChange={handleUpdateDesc}  type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Created Date</Form.Label>
    <Form.Control name="date" value={singleTodo.date} onChange={handleUpdateTitle}  type="date" />
    </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default UpdateTodo;