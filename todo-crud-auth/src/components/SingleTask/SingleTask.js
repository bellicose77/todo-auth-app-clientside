import React from 'react';

const SingleTask = ({todolist}) => {
    //console.log(todolist);
    return (
        <>
            <tr>
          <td></td>
          <td>{todolist.title}</td>
          <td>{todolist.description}</td>
          <td>{todolist.date}</td>
          <td><button>X</button>
          <button>Update</button>
          </td>
        </tr> 
      </>
    );
};

export default SingleTask;