import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact'

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router>
          <Navbar />
          <Route exact path='/' component={Index} />
          <Route path='/contact' component={Contact} />
          
        </Router>
        
      </div>
    );
  }
}

export default App;
