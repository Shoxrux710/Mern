import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Update from './components/Update'
import Details from './components/Details'
import Header from './components/Header'
import Form from './components/Form'
import AddCart from './components/AddCart'
import HistoryAll from './components/HistoryAll'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/history" component={HistoryAll} />
          <Route path="/update"  component={Update} />
          <Route path="/add/product"  component={AddCart} />
          <Route path="/form/:id"  component={Form} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
