import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

import MiniDrawer from './components/layout/MiniDrawer';
import './App.css';

const theme = { 
  palette: {
    primary: {
      main: '#b2ebf2',
    },
    secondary: {
      main: '#ccff90',
    },
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
          <MiniDrawer theme={theme}>
            {children}
          </MiniDrawer>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
