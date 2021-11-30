import React, { useEffect, useState } from 'react';
import { saveList } from "../../actions/index.js"
import { useDispatch, useSelector } from 'react-redux';

const FormView = () => {

    const categorias = useSelector( state => state.list);
    const toDos = useSelector( state => state.todo);

    //Estado general del componente
    const [state, setState] = useState({
        name: "",
        onCreate: false,
        error: false,
        mensaje: "",
    })

    const dispatch = useDispatch();

    useEffect(() => {
        if(state.onCreate && !state.error){
            dispatch(saveList({ name: state.name, id: null }));
            setState({
                ...state,
                onCreate: false,
                name: "",
                mensaje: ""
            })
        }
    },[state.onCreate])


    const onCreate = (event) => {
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
    };

    return <form onSubmit={onCreate} >
        <div class="col-md-5" style={{display: "flex", flexDirection: "column"}}>
            <label for="validationCustom03" class="form-label">Nueva lista de To-Dos</label> 
            <input type="text" name="name" value={state.name} placeholder="Lista de To-Dos"
                onChange={(event) => {
                    setState({ ...state, name: event.target.value })
                }} />
            {state.error === true ? (
                <span style={{color: "red", fontSize: "12px"}}>{state.mensaje}</span>
            ) : null}
            <button type="submit" class="btn btn-outline-primary mt-3">Crear Lista</button>
        </div>
    </form>
}

export default FormView;