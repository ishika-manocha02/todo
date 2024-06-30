
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo,handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editformvisibility,editTodo,cancelupdate}) => {

  const dispatch = useDispatch();

  const [todoValue, setTodoValue]=useState('');

  const [editValue,setEditValue]=useState('');
  useEffect(()=>{
    setEditValue(editTodo.todo)
  },[editTodo]);
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  const editSubmit=(e)=>{
    e.preventDefault();
    let editedObj={
        id: editTodo.id,
        todo: editValue,
        completed:false
    }
    dispatch(handleEditSubmit(editedObj));
  }
  return (<>
  {editformvisibility===false?(
    <form className='form-group custom-form' onSubmit={handleSubmit}>
      <label>Add your todo-items</label>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
        <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
      </div>
    </form> ):(<form className='form-group custom-form' onSubmit={editSubmit}>
      <label>Update your todo-items</label>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required value={editValue || ""} onChange={(e)=>setEditValue(e.target.value)}/>
        <button type="submit" className='btn btn-secondary btn-md'>Update</button>
      </div>
      <button className='btn btn-primary btn-md back-btn' onClick={cancelupdate}>BAck</button>
    </form>)}
  </>
    
  )
}
