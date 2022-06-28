import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleTask from '../SingleTask/SingleTask';

const ShowTask = () => {
    const [todolists,setTodolists] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=>res.json())
        .then(data=>setTodolists(data))
    },[])
    const handleDelete = id =>{
      console.log(id);
      fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE',
        headers:{
          "content-type":"application/json"
        }
       
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          const remainingTodo = todolists.filter(todo=>todo._id !==todo.id)
           setTodolists(remainingTodo);
          //console.log(data)
        }
      })
      
    }
    return (
        <div>
            <h2>Show Task</h2>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            todolists.map(todolist => <SingleTask key={todolist._id} todolist={todolist} handleDelete={handleDelete}></SingleTask>)
        }
       
        
      </tbody>
    </Table>
   </div>
    );
};

export default ShowTask;