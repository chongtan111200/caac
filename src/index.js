import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// create the navigation bar here
// add a list then create the bar according to this list
class Nav_but extends React.Component{
  render(){
    return (
      <li ><a herf='#'>{this.props.name}</a></li>
    );
  }
}
class Nav_bar extends React.Component{

  render(){
    // the navigation bar
    var buttons = ['home','Activities','Team'];
    return(
      <nav class="navbar">
      <ul class="nav navbar-nav">{
        buttons.map((name,index) => {
          return <Nav_but key={index} name={name}/>
        })
      }
      </ul>
      </nav>
    );
  }
}
ReactDOM.render(<Nav_bar />, document.getElementById('root'));
