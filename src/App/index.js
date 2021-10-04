import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'


//const defaultTodos = [
//  { text: 'Task 1', completed: true },
//  { text: 'Task 2', completed: false },
//  { text: 'Task 3', completed: true },
//  { text: 'Task 4', completed: false },
//];



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
