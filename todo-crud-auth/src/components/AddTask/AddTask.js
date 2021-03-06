import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const AddTask = () => {
    const [tasks,setTasks] = useState({title:'',description:'',date:''});

    const navigate = useNavigate()

    const handleUserInput = e =>{
        const nameValue = e.target.name;
        const fieldValue = e.target.value;
        setTasks({...tasks,[nameValue]:fieldValue});
        // console.log(nameValue);

    }

    const handelSubmit = e =>{
        e.preventDefault();
        const data = {
          title:tasks.title,
          description:tasks.description,
          date:tasks.date
        }
        
        fetch('http://localhost:5000/tasks',{
            method:'POST',

            headers:{
             'Content-Type' :'application/json'
            },
            body: JSON.stringify(data)


        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        navigate('../show');
        //console.log(tasks)
       
    }
    return (
        <div>
     <h2>Add Task</h2>

    <Form onSubmit={handelSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={handleUserInput} name="title" className="mb-3" type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={handleUserInput}  name="description" type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Created Date</Form.Label>
    <Form.Control onChange={handleUserInput}  name="date" type="date" />
    </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    );
};

export default AddTask;