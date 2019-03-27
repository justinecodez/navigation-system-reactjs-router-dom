import React, { Component } from 'react';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './components/home.js'
import About from './components/about'
import Contact from './components/contact.js';
import Error from './components/error'
import Navigation  from './components/navigation'


class App extends Component {
  render() {
    return (
     <div>
        
        <BrowserRouter>
        <Navigation />
        <Switch>
            <Route path = '/' component = {Home} exact/>
            <Route path = '/home' component = {Home} exact />
            <Route path = '/about' component = {About} />
            <Route path = '/contact' component = {Contact} />
            <Route component = {Error} />
       </Switch>
       </BrowserRouter>
     </div>
    );
  }
}

export default App;
