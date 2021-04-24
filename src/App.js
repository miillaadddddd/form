import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './assests/theme/ThemeRtl.js';
import './assests/fonts/css/fontiran.css';

import Main from './Components/layout/index.js';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <StylesProvider jss={jss}>
      <div>
      
       <Main/>
      </div>
   
      
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
