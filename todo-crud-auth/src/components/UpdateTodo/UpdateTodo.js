import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateTodo = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Update your todo</h2>
        </div>
    );
};

export default UpdateTodo;