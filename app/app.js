/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

/* eslint-disable import/no-unresolved */
// Load the manifest.json file and the .htaccess file
import '!file?name=[name].[ext]!./manifest.json';
import 'file?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import LanguageProvider from 'containers/LanguageProvider';
import configureStore from './store';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// Fontload
import FontFaceObserver from 'fontfaceobserver';
import styles from 'containers/App/styles.css';
const openSansObserver = new FontFaceObserver('Roboto', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add(styles.fontLoaded);
}, () => {
  document.body.classList.remove(styles.fontLoaded);
});

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, black, red, gold } from 'utils/colors';
import { fade } from 'material-ui/utils/colorManipulator';


const muiTheme = getMuiTheme({
  appBar: {
    color: black,
    textColor: white,
    titleFontWeight: 'bold',
  },
  floatingActionButton: {
    color: red,
    iconColor: white,
    secondaryColor: red,
    secondaryIconColor: white,
    disabledTextColor: black,
    disabledColor: black,
  },
  raisedButton: {
    color: red,
    secondaryColor: red,
    secondaryIconColor: white,
    disabledTextColor: black,
    disabledColor: black,
  },
  menu: {
    backgroundColor: white,
    containerBackgroundColor: white,
  },
  menuItem: {
    backgroundColor: white,
    background: white,
    hoverColor: fade(black, 0.035),
    selectedTextColor: black,
    rightIconDesktopFill: white,
  },
  textField: {
    textColor: black,
    hintColor: black,
    floatingLabelColor: gold,
    errorColor: red,
    focusColor: red,
    backgroundColor: 'transparent',
    borderColor: gold,
  },
  palette: {
    textColor: white,
    palette: {
      primary1Color: red,
      primary2Color: red,
      primary3Color: red,
      accent1Color: red,
      accent2Color: red,
      accent3Color: red,
      textColor: black,
      alternateTextColor: red,
      canvasColor: white,
      borderColor: black,
      disabledColor: fade(black, 0.3),
      pickerHeaderColor: red,
      clockCircleColor: fade(black, 0.07),
      shadowColor: black,
    },
  },
});
injectTapEventPlugin();

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import createRoutes from './routes';
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};


const render = (translatedMessages) => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <LanguageProvider messages={translatedMessages}>
          <Router
            history={history}
            routes={rootRoute}
            render={
              // Scroll to top when going to a new page, imitating default browser
              // behaviour
              applyRouterMiddleware(useScroll())
            }
          />
        </LanguageProvider>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
  );
};


// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  System.import('intl').then(() => render(translationMessages));
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
