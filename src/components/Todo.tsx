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

  const handleClick = () => {
    onDelete(todo);
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const handleUpdate = () => {
    console.log('update가 불렸다');
    const updated = {...todo, text:text};
    
    onUpdate(updated);
  }

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
      {/* 상태수정하기 */}
      <input 
        type="checkbox" 
        id='status' 
        checked={status === 'completed'}
        onChange={handleCheckChange}
        />
      <input type="text" 
        ref = {inputRef}
        value={text} 
        onChange={handleTextChange} 
        onBlur={handleUpdate} 
        onKeyPress={handleOnKeyPress}/>
      <button onClick={handleClick}><IoIosClose/></button>
    </li>
  )
}

export default Todo;