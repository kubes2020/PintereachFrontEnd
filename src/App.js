import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register.js'
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import Marketing from './components/Marketing';




// import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
    <Route path="/login">
      <Register></Register>
    </Route>
    <Route exact path="/">
      <Marketing></Marketing>
    </Route>
    </>
  );
}

export default App;

  
