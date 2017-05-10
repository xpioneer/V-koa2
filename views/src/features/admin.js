import React from 'react'

import {blue500} from 'MATERIALUI/styles/colors'
import getMuiTheme from 'MATERIALUI/styles/getMuiTheme'
import MuiThemeProvider from 'MATERIALUI/styles/MuiThemeProvider'

import Header from 'COMPONENTS/header'
import AdminContent from 'FEATURES/adminBody'
import Footer from 'COMPONENTS/footer'

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#555555'
  },
  appBar: {
    textColor: '#001f4b'
  },
});
if(__DEV__){console.log(muiTheme)}
const Admin = ({children}) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <AdminContent children={children}/>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default Admin;