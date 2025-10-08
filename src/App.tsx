import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import PostsList from './Components/PostsList';
import ChatLive from './Components/ChatLive';
import FizzBuzz from './Components/FizzBuzz';
import FizzBuzzTypescript from './Components/FizzBuzzTypescript';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FizzBuzzTypescript />
        <br />
        <FizzBuzz />
        <br />
        <TodoList />
        <br />
        <ChatLive />
        <br />
        <PostsList />
      </header>
    </div>
  );
}

export default App;
