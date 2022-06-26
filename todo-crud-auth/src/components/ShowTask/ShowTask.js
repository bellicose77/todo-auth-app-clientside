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
            todolists.map(todolist => <SingleTask key={todolist._id} todolist={todolist}></SingleTask>)
        }
       
        
      </tbody>
    </Table>
   </div>
    );
};

export default ShowTask;