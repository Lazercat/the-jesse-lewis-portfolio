import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './components/layout/Main';
import './App.css';

const theme = { 
  palette: {
    primary: { main: '#1c2566' },
    secondary: { main: '#1de9b6' }
  },
  navDrawer: {
      width: 200
  },
  pageDrawer: {
      width: 400
  }
};

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Router>
          <Main theme={theme}>
            {children}
          </Main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
