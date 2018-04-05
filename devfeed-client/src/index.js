import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { App } from './components/App';
import rootReducer, { middlewares } from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

ReactDOM.render((
  <Provider store={store}>
    <Fragment>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Fragment>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
