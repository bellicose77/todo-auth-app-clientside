import React from 'react';
import { Link } from 'react-router-dom';

const SingleTask = ({todolist,handleDelete}) => {
    //console.log(todolist);
    return (
        <>
            <tr>
          <td></td>
          <td>{todolist.title}</td>
          <td>{todolist.description}</td>
          <td>{todolist.date}</td>
          <td><button onClick={()=>handleDelete(todolist._id)} >X</button>
          <Link to={`/update/${todolist._id}`}><button>Update</button></Link>
          
          </td>
        </tr> 
      </>
    );
};

export default SingleTask;