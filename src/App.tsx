import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
  }



  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;



// let name:string;
// let age:number | string;
// let isStudent:boolean;
// let hobbies:string[];
// let role:[number,string];
// let personName: unknown;


// type Person = {
//   name:string;
//   age?:number;
// }

// let person :Person = {
//   name:'Max',
//   age:30,
// }

// let lotsOfPeople:Person[];

// interface Person {
//   name:string;
//   age:number;
// }
