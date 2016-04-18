import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
          <Link to="/">Login</Link>
          <Link to="/home">Home</Link>
          <Link to="/registration">Registration</Link>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
