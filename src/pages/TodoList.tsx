import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';


export type TodoType =  {
  userId: string;
  todoId: string;
  status: 'active' | 'completed';
  text: string;
  date: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([{
    userId: '첫번째 유저',
    todoId: '데모 todoId1',
    status: 'active',
    text: '초콜릿 먹기',
    date: '2023-02-21',
  },{
    userId: '첫번째 유저',
    todoId: '데모 todoId2',
    status: 'active',
    text: '장보기',
    date: '2023-02-21',
  },
]);

  const handleDelete = (deleted: TodoType) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.todoId !== deleted.todoId)
    })
  }

  const handleUpdate = (updated: TodoType) => {
    setTodos(todos.map(todo => todo.todoId === updated.todoId ? updated : todo));
  }

  const handleAdd = (added: TodoType) => {
    setTodos([...todos, added]);
  }

  return (
    <>
      <ul>
        {todos && todos.map((todo) => <Todo key={todo.todoId} todo = {todo} onDelete={handleDelete} onUpdate={handleUpdate}/>)}
        <AddTodo onAdd={handleAdd}/>
      </ul>
    </>
  );
}

export default TodoList;


