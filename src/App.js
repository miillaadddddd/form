import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import createMuiTheme from './assests/theme/ThemeRtl.js';
import { ThemeProvider } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



function App() {
  return (
    <ThemeProvider theme={createMuiTheme}>
    <StylesProvider jss={jss}>
    <div className="App">
       راست چین شدد
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
