import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import VideoSearch from './VideoSearch';
import VideoLib from './VideoLib';
import Customers from './Customers';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/search' component={VideoSearch}></Route>
        <Route exact path='/library' component={VideoLib}></Route>
        <Route exact path='/customers' component={Customers}></Route>
  </Switch>

);

export default Main;