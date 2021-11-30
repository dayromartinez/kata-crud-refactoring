import React, { useEffect, useState } from 'react';
import { findAllLists, deleteList } from "../../actions/index.js"
import { useDispatch, useSelector } from 'react-redux';
import ToDoForm from "../todo/FormView.js";
import ToDoList from "../todo/ListView.js";

const ListView = () => {

    const categorias = useSelector( state => state.list);
    const toDos = useSelector( state => state.todo);


    //Estado general del componente
    const [state, setState] = useState({
        isLoaded: false,
        isComplete: false,
        name: "",
        clickDelete: 0
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllLists());
        setState({
            ...state,
            isLoaded: true
        })
    },[dispatch, state.clickDelete])

    const onDelete = (listId) => {
        dispatch(deleteList(listId));
        setState({
            ...state,
            clickDelete: state.clickDelete + 1
        })    
    };

    return (
        <div>
            {!state.isLoaded && <div>Cargando...</div>}
            {categorias.elements.length === 0 && <div>¡Lista vacía!</div>}
            {categorias.elements.map((element) => {
                return (
                    <div key={element.id} id={"list-to-do-"+element.id} >
                        <fieldset>
                            <legend>
                                {element.name.toUpperCase()}
                                <button class="btn btn-danger" style={{marginLeft: "5rem", marginBottom: "0.5rem", marginTop: "0.5rem"}} onClick={() => onDelete(element.id)}>Eliminar</button>
                            </legend>
                            <ToDoForm listId={element.id} />
                            <ToDoList listId={element.id} />
                        </fieldset>
                    </div>
                )
            })}
        </div>
    );
}

export default ListView;