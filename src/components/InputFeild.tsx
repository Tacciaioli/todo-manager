import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios';

interface Props {
  //  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;

  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ inputValue, setInputValue }) => {
  // const inputRef = React.useRef<HTMLInputElement>(null);
  // const [inputValue, setInputValue] = useState<string>('');

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

     // Get the CSRF token from the cookie
    //  const response = await axios.get('http://127.0.0.1:8000/csrf_cookie/');
    // Create an object with the data you want to send to the API
    const data = {
      todo: inputValue,
    };

    try {
      // Make an HTTP POST request to your Python API
      await axios.post('http://127.0.0.1:8000/data/', data);
      // headers: {
      //   'X-CSRFToken': response.data.csrfToken, // Include the CSRF token in the request headers
      // },
      // Clear the input field after successful request
      setInputValue('');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        // inputRef.current?.blur();
        // setTodo(inputValue);
        setInputValue('');
      }}
    >
      <input
        // ref={inputRef}
        type="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter your task here'
        className='input__box'
      />
      <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputFeild;
