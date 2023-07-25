import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './Apps/todoApp';
import App from './Apps/App';
import TellJoke from './Apps/Joke';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // {/* <TodoApp /> */}
    // {/* <App /> */}
    <TellJoke/>
  </React.StrictMode>
);