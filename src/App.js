import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, useHistory } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'


import Marketing from './components/Marketing';
import Register from './components/Register.js'
import Login from './components/Login'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute'
import Article from './components/Article'
import styled from "styled-components";
// import ArticleCard from './components/ArticleCard'
const store = createStore(rootReducer, applyMiddleware(thunk))

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #4695e3;
    max-width: 100%;
    text-align: right;

  @media (max-width: 800px){
    text-align: center;
    flex-direction: column;
  }
`

const NavLink = styled(Link)`
  border: none;
  text-decoration: none;
  border: none;

  padding: .4% 2%;
  color: white;

  font-size: 1.3rem;
  
  &:hover {
    color: white;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 800px){
    font-size: 1rem;
  }
`

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  const handleLogOut = () => {
    localStorage.clear()
    history.push("/")
    setLoggedIn(false)
  }

  return (
    <>
      <MainNav className="navcontainer">

        <NavLink to="/" className="navbar-logo">Pintereach</NavLink>

        <div className="items-container">
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? <NavLink to="/add">Add Articles</NavLink> : null}
          {isLoggedIn ? <NavLink to="/home">Saved Articles</NavLink> : null}
          {isLoggedIn ? null : <NavLink to="/register">Register</NavLink>}
          {isLoggedIn ? <NavLink to="/" onClick={handleLogOut}>Logout</NavLink> : <NavLink to="/Login">Login</NavLink>}
        </div>

      </MainNav>
      <Provider store={store}>
        <Route path="/login" render={(props) => {
          return <Login setLoggedIn={setLoggedIn} {...props} />
        }} />
        <Route path="/register" render={(props) => {
          return <Register {...props} />
        }} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/add" component={Article} />
        <Route exact path="/">
          <Marketing></Marketing>
        </Route>
      </Provider>
    </>
  );
}

export default App;


