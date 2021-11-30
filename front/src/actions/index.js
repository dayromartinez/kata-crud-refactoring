export const LIST_CREATED = "list.LIST_CREATED";
export const LIST_FINDED = "list.LIST_FINDED";
export const LIST_DELETED = "list.LIST_DELETED";
export const ITEM_LIST_CREATED = "item.LIST_CREATED";
export const ITEM_LIST_UPDATED = "item.LIST_UPDATED";
export const ITEM_LIST_FINDED = "item.LIST_FINDED";
export const ITEM_LIST_DELETED = "item.LIST_DELETED";
export const ITEM_LIST_ON_EDITED = "item.LIST_ON_EDITED";
const HOST_API = "http://127.0.0.1:8080/api/";

//Obtencion de listas por defecto
export function findAllLists() {
    return async function(dispatch) {
        return await fetch(HOST_API + "list")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: LIST_FINDED, payload: {list: json} })
            })
            .catch(error => console.error('Error:', error))
    };
}

//Guardar nueva lista
export function saveList(request) {
    return async function(dispatch) {
        return await fetch(HOST_API + "/todolist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: LIST_CREATED, payload: {item: json} })
        })  
        .catch(error => console.error('Error:', error))
    };
}

//Eliminar lista
export function deleteList(listId) {
    return async function(dispatch) {
        return await fetch(HOST_API + listId + "/todolist", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: LIST_DELETED, payload: {listId} })
        })    
        .catch(error => console.error('Error:', error))
    };
}


//Obtención de ToDos de lista por defecto
export function findAllToDosByListId(listId) {
    return async function(dispatch) {
        return await fetch(HOST_API + listId+"/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: ITEM_LIST_FINDED, payload: {items: json, listId: listId} })
            })
            .catch(error => console.error('Error:', error))
    };
}

//Guardar nuevo ToDo
export function saveToDo(listId, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + listId+"/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: ITEM_LIST_CREATED, payload: {item: json, listId: listId} })
        })  
        .catch(error => console.error('Error:', error))
    };
}

//Actualizar ToDo
export function updateToDo(listId, request) {
    return async function(dispatch) {
        return await fetch(HOST_API + listId+"/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: ITEM_LIST_UPDATED, payload: {item: json, listId: listId} })
        })  
        .catch(error => console.error('Error:', error))
    };
}

//Eliminar ToDo
export function deleteToDo(listId, toDoId) {
    return async function(dispatch) {
        return await fetch(HOST_API + toDoId +"/todo", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: ITEM_LIST_DELETED, payload: {itemId: toDoId, listId} })
        })    
        .catch(error => console.error('Error:', error))
    };
}

//Acción para la edición de un todo desde el input de toDos
export function onEditedToDo(listId, request){
    return {
        type: ITEM_LIST_ON_EDITED,
        payload: {item: request, listId: listId}
    }
}