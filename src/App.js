import React, { Component } from 'react';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

import Main from './layout/Main';
import './App.css';

const theme = {
  palette: {
      contrastThreshold: 3,
      primary: {
          light: teal[300],
          main: teal[500],
          dark: teal[800]
      },
      secondary: {
          light: pink[300],
          main: pink[500],
          dark: pink[800]
      }
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
    return (
      <React.Fragment>
        <Main theme={theme}>
          <h1> Hello Werld </h1>
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
