import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './assests/theme/ThemeRtl.js';
import './assests/fonts/css/fontiran.css';

import Main from './Components/layout/index.js';
import { Container, Grid, Typography } from '@material-ui/core';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <StylesProvider jss={jss}>
      <Grid container >
      <Grid itrem xs={3}>
        <Typography>سلاممم</Typography>
      </Grid>
      <Grid itrem xs={9}>
        <Container maxWidth="md">
        <Typography>
          من از اینجا دارم به فردا فکر میکنم
        </Typography>
        </Container>
      </Grid>
      </Grid>
      
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
