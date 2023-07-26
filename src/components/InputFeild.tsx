import React from 'react'
import "./styles.css"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo (e.target.value)}
        placeholder='Enter your task here'
        className='input__box'
      />
      <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputFeild;
