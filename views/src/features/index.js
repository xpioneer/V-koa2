import React from 'react';

import {blue500} from 'MATERIALUI/styles/colors'
import getMuiTheme from 'MATERIALUI/styles/getMuiTheme';
import MuiThemeProvider from 'MATERIALUI/styles/MuiThemeProvider';

import Header from 'COMPONENTS/header'
import SiderBar from 'FEATURES/siderbar/index'
import MainContent from 'FEATURES/body'
import Footer from 'COMPONENTS/footer'

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#555555',//'#001f4b',
  },
  appBar: {
    textColor: '#001f4b'
    // color: '#F44336'
    // color: 'rgba(53, 73, 97, 0.0)',
    // position: 'fixed'
  },
});
console.log(muiTheme)
const App = ({children}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <SiderBar />
      <MainContent children={children}/>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;