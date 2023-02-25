import React, { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import { TodoType } from '../pages/TodoList';

type Props = {
  todo: TodoType,
  onDelete: (deleted: TodoType) => void,
  onUpdate: (updated: TodoType) => void,
}

const Todo = ({todo, onDelete, onUpdate}: Props) => {
  const [text, setText] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<TodoType['status']>(todo.status);

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      if (inputRef.current != null) {
        inputRef.current.blur();
      }
    }
  }

  const handleCheckChange = () => {
    if(status === 'completed'){
      onUpdate({...todo, status: 'active'});
      setStatus('active');
    } else {
      onUpdate({...todo, status: 'completed'});
      setStatus('completed');
    }
    
  }

  return (
    <li key={todo.todoId}>
      <input 
        type="checkbox" 
        id='status' 
        checked={status === 'completed'}
        onChange={handleCheckChange}
        />
      <input type="text" 
        ref = {inputRef}
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        onBlur={()=>onUpdate({...todo, text:text})} 
        onKeyPress={handleOnKeyPress}/>
      <button onClick={()=>onDelete(todo)}><IoIosClose/></button>
    </li>
  )
}

export default Todo;