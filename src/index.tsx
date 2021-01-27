import React from 'react';
import { render } from 'react-dom';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { KigurumiNavbar } from './components/Navbar/Navbar';
import { Card } from './components/Card/Card';
import { Delivery } from './components/Delivery/Delivery';
import { Warranty } from './components/Warranty/Warranty';
import { Footer } from './components/Footer/Footer';
import { LogInForm } from './components/Regforms/LogInForm';
import { SignUpForm } from './components/Regforms/SignUpForm';
import { Payment } from './components/Payment/Payment';
import { About } from './components/About/About';
import { Profile } from './components/Profile/Profile';

// import { spamWordsMiddleWare } from './redux/middleWare';

//import createSagaMiddleWare from 'redux-saga'
//import { sagaWatcher } from './redux/sagas';

//const saga = createSagaMiddleWare()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk, spamWordsMiddleWare),
    applyMiddleware(thunk),
    composeEnhancers()
  )
);

const routing = (
  <Router>
    <Provider store={store}>
      <div className="body">
        <KigurumiNavbar />
        <LogInForm />
        <SignUpForm />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/shopping_cart" component={ShoppingCart} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/warranty" component={Warranty} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  </Router>
);
render(routing, document.querySelector('#body'));

//saga.run(sagaWatcher)

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// render(app, document.getElementById('body'));
// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
