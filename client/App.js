import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { indigo, pink } from 'material-ui/colors';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './core/Home';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757de8',
            main: '#3f51b5',
            dark: '#002984',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c60055',
            contrastText: '#000'
        },
        openTitle: indigo['400'],
        protectedTitle: pink['400'],
        type: 'dark'
    }
});

const App = () => (
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <Home/>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default hot(module)(App);
