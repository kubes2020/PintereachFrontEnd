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
  text-align: right;
  @media (max-width: 400px){
    text-align: center;
  }
`
const NavLink = styled(Link)`
  border:none;
  text-decoration:none;
  border: none;
  padding: .4% 2%;
  padding-top:3%;
  color: white;
  min-width: 150px;
  margin: .2%;
  height:30px;
  font-size: 0.9rem;
  justify-content: center;
  &:hover {
    color: white;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 400px){
    font-size: 1rem;
    flex-direction: column;
  }
  
`


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory()

  const handleLogOut = () =>{
    localStorage.clear()
    setIsLoggedIn(false)
    history.push("/")
  }


  return (
    <>
    <MainNav>
      <div className="navcontainer">
        {<NavLink to="/">Home</NavLink>}
        {isLoggedIn ? <NavLink to="/Article">Add Articles</NavLink> : null}
        {/* {isLoggedIn ? <Link to="/ArticleCard">Saved Articles</Link> : null} */}
        {isLoggedIn ? null : <NavLink to="/Register">Register</NavLink>}
        {localStorage.getItem('token') === null? <NavLink to="/" onClick={ handleLogOut }>Logout</NavLink> : <NavLink to="/Login">Login</NavLink> } 
      </div>
    </MainNav>
    <Provider store={store}>
      <Route path="/login" render={(props) => {
        return <Login {...props} />
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


