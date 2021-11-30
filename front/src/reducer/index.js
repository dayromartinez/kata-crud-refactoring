import { LIST_CREATED, LIST_FINDED, LIST_DELETED, ITEM_LIST_CREATED, ITEM_LIST_UPDATED, ITEM_LIST_FINDED,
ITEM_LIST_DELETED, ITEM_LIST_ON_EDITED } from "../actions/index.js";

const initialState = {
    list: {
        elements: []
    },
    todo: {
        elements: [],
        item: {}
    }
};

//Se establecen las funcionalidaes de cada una de las acciones en este reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case LIST_FINDED:
            return {
                ...state,
                list: { elements: action.payload.list } 
            };
        
        case LIST_CREATED:
            const list = state.list.elements;
            list.push(action.payload.item);
            return {
                ...state,
                list: { elements: list }
            };
        
        case LIST_DELETED:
            const lista = state.list.elements.filter((element) => {
                return element.id !== action.payload.listId;
            });
            return {
                ...state,
                list: { elements: lista }
            };
        
        case ITEM_LIST_FINDED:
            const listaToDosforList = state.todo.elements;
            action.payload.items.forEach(element => {
                listaToDosforList.push(element);
            });
            return {
                ...state,
                todo: { elements: listaToDosforList, item: {} }
            };

        case ITEM_LIST_CREATED:
            const listToDos = state.todo.elements;
            listToDos.push(action.payload.item);
            return {
                ...state,
                todo: { elements: listToDos, item: {} }
            };

        case ITEM_LIST_ON_EDITED:
            const onEditedToDo = { ...state.todo };
            onEditedToDo.item[action.payload.listId] = action.payload.item;
            return {
                ...state,
                todo: onEditedToDo
            };
        
        case ITEM_LIST_UPDATED:
            const editToDo = state.todo.elements.map((element) => {
                if(element.id === action.payload.item.id){
                    return {...action.payload.item, listId: action.payload.listId};
                }
                return element;
            });
            return {
                ...state,
                todo: { elements: editToDo, item: {} }
            };
        
        case ITEM_LIST_DELETED:
            const deleteToDolist = state.todo.elements.filter((element) => {
                return element.id !== action.payload.itemId;
            });
            return {
                ...state,
                todo: { elements: deleteToDolist, item: {} }
            };

        default:
            return state;
    }
}

export default rootReducer;