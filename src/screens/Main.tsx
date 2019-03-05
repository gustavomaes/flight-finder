import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Finder from './Finder';
import Details from './Details';

const Main= () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/finder' component={Finder}/>
        <Route path='/details' component={Details}/>
      </Switch>
    </main>
  );
}

export default Main