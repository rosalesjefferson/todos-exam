import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home/home.component'
import UpdateTodos from './pages/update-todos/update-todos.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/update/:id' component={ UpdateTodos} />
      </Switch> 
    </div>
  );
}

export default App;

