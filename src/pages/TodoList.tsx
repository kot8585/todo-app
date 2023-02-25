import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import DateTodo from '../components/Date';
import moment from 'moment';


export type TodoType =  {
  userId: string;
  todoId: string;
  status: 'active' | 'completed';
  text: string;
  date: Date;
}

const TodoList = () => {
  const [value, onChange] = useState(new Date());

  const [todos, setTodos] = useState<TodoType[]>([{
    userId: '첫번째 유저',
    todoId: '데모 todoId1',
    status: 'active',
    text: '초콜릿 먹기',
    date: moment().subtract(1, 'day').toDate(),
  },{
    userId: '첫번째 유저',
    todoId: '데모 todoId2',
    status: 'active',
    text: '장보기',
    date: moment().toDate(),
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

  
  const filtered = filterTodosByDate(todos, value);
  return (
    <>
      <DateTodo value={value} onChange={onChange}/>
      <ul>
        {filtered && filtered.map((todo) => <Todo key={todo.todoId} todo = {todo} onDelete={handleDelete} onUpdate={handleUpdate}/>)}
        <AddTodo value={value} onAdd={handleAdd}/>
      </ul>
    </>
  );
}

const filterTodosByDate = (todos: TodoType[], value: Date):TodoType[] => {
    console.log('Todos', todos);
    if(!todos){
      return [];
    }

    return todos.filter((todo) => moment(todo.date).format('yyyyMMD') === moment(value).format('yyyyMMD'));
  }

export default TodoList;


