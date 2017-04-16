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
    textColor: blue500,
  },
  appBar: {
    height: 50,
  },
});

const App = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Header />
      <SiderBar />
      <MainContent children={children}/>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;