import React from 'react';
import Home from './../Home';
import About from './../About';
import Work from './../Work';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Footer from './../Footer';

class Index extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
     );
  }
}
 
export default Index;
