// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { currentUser } from 'utils/localstorage';
import { loginSuccess } from 'containers/LoginPage/actions';
import { load as loadStock } from 'containers/StockPage/actions';
import { load as loadTabs } from 'containers/TabsPage/actions';
import { load as loadTransactions } from 'containers/TransactionsPage/actions';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  // Check if user if logged
  if (currentUser() && currentUser().uid) {
    const { displayName, email } = currentUser();
    store.dispatch(loginSuccess({ currentUser: displayName, email }));
  }

  // Function that redirects to LoginPage if not logged
  function redirectToLogin() {
    return (nextState, replace) => {
      if (!currentUser()) {
        replace({
          pathname: '/',
          state: { nextPathname: nextState.location.pathname },
        });
      }
    };
  }

  // Function that redirects LoginPage to dashboard if logged
  function redirectToDashboard() {
    return (nextState, replace) => {
      if (currentUser()) {
        replace('/comandas');
      }
    };
  }

  // Function to load stock list
  function loadStockData() {
    store.dispatch(loadStock());
  }
  // Function to load tabs list
  function loadTabsData() {
    store.dispatch(loadTabs());
  }
  // Function to load tabs list
  function loadTransactionsData() {
    store.dispatch(loadTransactions());
  }

  return [
    {
      onEnter: redirectToDashboard(),
      path: '/',
      name: 'loginPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: () => { redirectToLogin(); loadStockData(); loadTabsData(); },
      path: '/comandas',
      name: 'tabsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/TabsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin(),
      path: '/cadastrar-administrador',
      name: 'signupAdmin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignupAdmin/reducer'),
          System.import('containers/SignupAdmin/sagas'),
          System.import('containers/SignupAdmin'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signupAdmin', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin(),
      path: '/cadastrar-gerente',
      name: 'signupManager',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignupManager/reducer'),
          System.import('containers/SignupManager/sagas'),
          System.import('containers/SignupManager'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signupManager', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: () => { redirectToLogin(); loadStockData(); },
      path: '/estoque',
      name: 'stockPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/StockPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: redirectToLogin(),
      path: '/estoque/adicionar',
      name: 'addStockPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AddStockPage/reducer'),
          System.import('containers/AddStockPage/sagas'),
          System.import('containers/AddStockPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('addStockPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: () => { redirectToLogin(); loadStockData(); loadTabsData(); },
      path: '/comandas/nova(/:tabId)',
      name: 'addProductsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AddProductsPage/reducer'),
          System.import('containers/AddProductsPage/sagas'),
          System.import('containers/AddProductsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('addProductsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: () => { redirectToLogin(); },
      path: '/transacoes',
      name: 'transactionsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/TransactionsPage/reducer'),
          System.import('containers/TransactionsPage/sagas'),
          System.import('containers/TransactionsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('transactionsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/sobre',
      name: 'aboutPage',
      getComponent(location, cb) {
        System.import('components/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
