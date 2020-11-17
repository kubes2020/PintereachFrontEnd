import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import { rootReducer } from './reducers'

import Marketing from './components/Marketing';
import Register from './components/Register.js'
import Login from './components/Login'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Route path="/login" render={(props) => {
        return <Login {...props} />
      }} />
      <Route path="/register" render={(props) => {
        return <Register {...props} />
      }} />
      <PrivateRoute exact path="/protected" component={Home} />
      <Route exact path="/">
        <Marketing></Marketing>
      </Route>
    </Provider>
  );
}

export default App;


