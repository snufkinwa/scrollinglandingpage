import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/product' component={Product}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
