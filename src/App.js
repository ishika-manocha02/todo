import { useState } from 'react';
import './App.css';
import { Form } from './components/form';
import { Todos } from './components/todos';
import { deleteall } from './redux/todoapp/actions';
import { useDispatch,useSelector } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editformvisibility ,seteditformvisibility]=useState(false);
  
  const [editTodo,seteditTodo]=useState('');
  const handleEditClick=(todo)=>{
    seteditformvisibility(true);
    seteditTodo(todo);
  }

  const cancelupdate=()=>{
    seteditformvisibility(false);
  }
   return (
    <div className='wrapper'>
      <br></br>
      <h1 className='text-center h1-text'>TODO APP USING REACT REDUX</h1>
      <Form editformvisibility={editformvisibility} editTodo={editTodo} cancelupdate={cancelupdate}/>
      <Todos  handleEditClick={handleEditClick} editformvisibility={editformvisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all' onClick={()=>dispatch(deleteall())}> DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
