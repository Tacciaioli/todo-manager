import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
  }

  const ondragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
    return;

    let add,
      active = todos,
      completed = completedTodos;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);
    setTodos(active);
  }

  return (
    <DragDropContext onDragEnd={ondragEnd} >
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputFeild inputValue={todo} setInputValue={setTodo} handleAdd={handleAdd} setTodo={function (value: React.SetStateAction<string>): void {
          throw new Error('Function not implemented.');
        } } />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}


export default App;



// // // // let name:string;
// // // // let age:number | string;
// // // // let isStudent:boolean;
// // // // let hobbies:string[];
// // // // let role:[number,string];
// // // // let personName: unknown;


// // // // type Person = {
// // // //   name:string;
// // // //   age?:number;
// // // // }

// // // // let person :Person = {
// // // //   name:'Max',
// // // //   age:30,
// // // // }

// // // // let lotsOfPeople:Person[];

// interface Person {
//   name:string;
//   age:number;
// }
