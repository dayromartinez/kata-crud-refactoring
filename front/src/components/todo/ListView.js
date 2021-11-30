import React, { useEffect, useState } from 'react';
import { findAllToDosByListId, deleteToDo, onEditedToDo, updateToDo } from "../../actions/index.js"
import { useDispatch, useSelector } from 'react-redux';

const ListView = ({ listId }) => {


    const categorias = useSelector( state => state.list);
    const toDos = useSelector( state => state.todo);

    const list = toDos.elements.filter((element) => {
        return element.listId === listId;
    });

    //Estado general del componente
    const [state, setState] = useState({
        isLoaded: false,
        name: "",
        clickDelete: 0
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllToDosByListId(listId));
        setState({
            ...state,
            isLoaded: true
        })
    },[dispatch])

    const onDelete = (listId, toDoId) => {
        dispatch(deleteToDo(listId, toDoId));
        setState({
            ...state,
            clickDelete: state.clickDelete + 1
        })
    };

    const onEdit = (item) => {
        dispatch(onEditedToDo(listId, item))
    };


    const onChange = (event, item) => {

        const request = {
            name: item.name,
            id: item.id,
            completed: event.target.checked
        };
        
        dispatch(updateToDo(listId, request))
        
    };

    const decorationDone = {
        textDecoration: 'line-through',
        color: '#c3c3c3'
    };

    return (
        <div>
            {!state.isLoaded && <div>Cargando...</div>}
            <table >
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Tarea</td>
                        <td>¿Completado?</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {list.map((todo) => {
                        
                        return <tr key={todo.id} style={todo.completed ? decorationDone : {}}  id={"to-do-"+todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
                            <td><button class="btn btn-danger" onClick={() => onDelete(listId, todo.id)}>Eliminar</button></td>
                            <td><button class="btn btn-warning" disabled={todo.completed} onClick={() => onEdit(todo)}>Editar</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListView;