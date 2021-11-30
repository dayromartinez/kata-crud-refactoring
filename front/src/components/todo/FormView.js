import React, { useEffect, useState } from 'react';
import { saveToDo, updateToDo } from "../../actions/index.js"
import { useDispatch, useSelector } from 'react-redux';

const FormView = ({ listId }) => {

    const categorias = useSelector( state => state.list);
    const toDos = useSelector( state => state.todo);
    const item = toDos.item[listId] ? toDos.item[listId] : {};

    //Estado general del componente
    const [state, setState] = useState({
        name: "",
        onCreate: false,
        onEditar: false,
        error: false,
        mensaje: "",
        item
    })

    const dispatch = useDispatch();

    useEffect(() => {
        if(state.onCreate && !state.error){

            const request = {
                name: state.name,
                id: null,
                completed: false
            };
            dispatch(saveToDo(listId, request));
            setState({
                ...state,
                onCreate: false,
                name: "",
                mensaje: ""
            })
        }
    },[state.onCreate])


    const onAdd = (event) => {
        event.preventDefault();
        if(state.name === ""){
            setState({
                ...state,
                error: true,
                mensaje: "Campo vacío. Inténtelo de nuevo"
            })
        }else if(state.name.length < 3 && state.name.length > 0){
            setState({
                ...state,
                error: true,
                mensaje: "Mínimo 3 letras. Inténtelo de nuevo"
            })
        }else{
            setState({
                ...state,
                onCreate: true,
                error: false
            })
        }
    }

    useEffect(() => {
        if(state.onEditar && !state.error){

            const request = {
                name: state.name,
                id: item.id,
                completed: item.completed
            };

            dispatch(updateToDo(listId, request));
            setState({
                ...state,
                onEditar: false,
                name: "",
                mensaje: ""
            })
        }
    },[state.onEditar])

    const onEdit = (event) => {
        event.preventDefault();
        if(state.name === ""){
            setState({
                ...state,
                error: true,
                mensaje: "Campo vacío. Inténtelo de nuevo"
            })
        }else if(state.name.length < 3 && state.name.length > 0){
            setState({
                ...state,
                error: true,
                mensaje: "Mínimo 3 letras. Inténtelo de nuevo"
            })
        }else{
            setState({
                ...state,
                onEditar: true,
                error: false
            })
        }
    }

    return (
        <form>
            <div class="col-md-6" style={{display: "flex", flexDirection: "column"}}>
                <input type="text" name="name" placeholder="¿Qué piensas hacer?" defaultValue={item.name} id="nameInput"
                    
                    onChange={(event) => {
                        setState({ ...state, name: event.target.value })
                    }} />
                {state.error === true ? (
                    <span style={{color: "red", fontSize: "12px"}}>{state.mensaje}</span>
                ) : null}
                {item.id && <button class="btn btn-warning" style={{marginTop: "0.5rem"}} onClick={onEdit}>Actualizar</button>}
                {!item.id && <button class="btn btn-success" style={{marginTop: "0.5rem"}} onClick={onAdd}>Crear</button>}
            </div>
        </form>
    );
}

export default FormView;