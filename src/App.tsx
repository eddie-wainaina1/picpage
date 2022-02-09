import React from 'react';
import './App.css';
import { ListContainer } from './components/ListContainer';
import { Provider } from "react-redux"
import store from "./stateManagement/StateStore"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pic Page</h1>
      </header>
      <Provider store={store}>
      <ListContainer/>
      </Provider>
    </div>
  );
}

export default App;
