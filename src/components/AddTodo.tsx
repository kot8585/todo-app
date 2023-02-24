import { useState, ChangeEvent } from "react";
import { TodoType } from '../pages/TodoList';

type Props = {
  onAdd: (added: TodoType) => void,
}
const AddTodo = ({onAdd}: Props) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text.trim().length <= 0) {
      alert('1글자 이상 적어주세요');
      return;
    }

    onAdd({
      userId: '첫번째 유저',
      todoId: 'todoId',
      status: 'active',
      text: text,
      date: '2023-02-21',
    })

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        value={text} 
        placeholder="할일을 추가해주세요"  />
      <button>추가</button>
    </form>
  )
}

export default AddTodo;