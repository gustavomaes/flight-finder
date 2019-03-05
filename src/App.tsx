import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme';
import Main from './screens/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
