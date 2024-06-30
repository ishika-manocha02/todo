import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState=[
    {id: 1, todo: 'STUDY REACT', completed: false},
    {id: 2, todo: 'COMPLETE ASSIGNMENT', completed: false},
    {id: 3, todo: 'MONGODB ', completed: true},
];

export const operationsReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...state,action.payload];
        case DELETE_ALL:
            return[];
        case REMOVE_TODO:
            const filteredTodos =state.filter((todo)=>todo.id !== action.payload)
            return filteredTodos;
        case UPDATE_TODO:
            let data=action.payload;
            const updatedarray=[];
            state.map((item)=>{
                if(item.id === data.id){
                    item.id=data.id;
                    item.todo=data.todo;
                    item.completed=data.completed;
                }
                updatedarray.push(item)
            })
            return updatedarray;
        case UPDATE_CHECKBOX:
            let todoarray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed= !item.completed;
                }
                todoarray.push(item);
            })
            return todoarray;
        default:return state;
    }
}