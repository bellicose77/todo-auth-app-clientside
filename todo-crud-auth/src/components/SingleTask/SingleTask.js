import React from 'react';

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
          <button>Update</button>
          </td>
        </tr> 
      </>
    );
};

export default SingleTask;