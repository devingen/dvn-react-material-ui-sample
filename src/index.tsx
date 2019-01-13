import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const primary = {
  50: '#b00021',
  100: '#b00021',
  200: '#b00021',
  300: '#b00021',
  400: '#b00021',
  500: '#b00021',
  600: '#b00021',
  700: '#b00021',
  800: '#b00021',
  900: '#b00021',
  A100: '#b00021',
  A200: '#b00021',
  A400: '#b00021',
  A700: '#b00021'
};

const secondary = {
  50: '#00BD9C',
  100: '#00BD9C',
  200: '#00BD9C',
  300: '#00BD9C',
  400: '#00BD9C',
  500: '#00BD9C',
  600: '#00BD9C',
  700: '#00BD9C',
  800: '#00BD9C',
  900: '#00BD9C',
  A100: '#00BD9C',
  A200: '#00BD9C',
  A400: '#00BD9C',
  A700: '#00BD9C'
};

const palette = {
  primary,
  //  primary2Color: primaryColorDark,
  // primary3Color: grey400,
  // accent1Color: pinkA200,
  secondary,
  // accent2Color: grey100,
  // accent3Color: grey500,
  //  textColor: midnightBlue,
  //  secondaryTextColor: midnightBlue2,
  //  alternateTextColor: gray50,
  //  canvasColor: gray50,
  // textColor: '#eeeeee',
  // secondaryTextColor: '#aaaaaa',
  // alternateTextColor: '#333333',
  // alternateTextColor: white,
  // canvasColor: white,
  // borderColor: grey300,
  // disabledColor: fade(darkBlack, 0.3),
  // pickerHeaderColor: cyan500,
  // clockCircleColor: fade(darkBlack, 0.07),
  // shadowColor: fullBlack,
};

const appTheme = {
  fontFamily: 'Nunito, sans-serif',
  palette: {
    ...palette,
  },
  tabs: {
    backgroundColor: 'transparent',
    fontFamily: 'Poppins',
    // selectedTextColor: palette.textColor,
    // textColor: palette.secondaryTextColor,
  },
  // avatar: {
  //   backgroundColor: gray500,
  // },
  // toggle: {
  //   thumbOnColor: accent1Color,
  //   thumbRequiredColor: accent1Color,
  //   trackOnColor: accent1ColorLighter,
  //   trackRequiredColor: accent1ColorLighter,
  // },
  typography: {
    useNextVariants: true,
  },
};

const theme = createMuiTheme(appTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}><App/></MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
