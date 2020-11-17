import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Marketing from './components/Marketing';
import Register from './components/Register.js'
import Login from './components/Login'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { rootReducer } from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Route path="/login" render={(props) => {
        return <Login {...props}/>
      }} />
      <Route path="/register" render={(props) => {
        return <Register {...props}/>
      }} />
      <Route exact path="/">
        <Marketing></Marketing>
      </Route>
    </Provider>
  );
}

export default App;


