import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './public/Header'
import Footer from './public/Footer'
import Destinaton from './destination'
import Package from './packages'
import Blog from './blog'
import DetailBlog from './blog/Detail'
import DetailDestination from './destination/DetailDestination'
import Order from './order'

import Home from './home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={Home}/>
          <Route  path="/home" component={Home} />
          <Route exact path="/destination" component={Destinaton} />
          <Route path="/package" component={Package} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={DetailBlog} />
          <Route path="/destination/:id" component={DetailDestination} />
          <Route exact path="/order/:id" component={Order} />
        <Footer />
      </div>
    );
  }
}

export default App;
