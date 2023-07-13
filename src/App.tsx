import React from 'react';
import Home from './components/Home';

import {firebaseConfigEncryp} from "./env";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import PageError from './components/PageError';
import Footer from './components/Footer';

import './style/App.css';
import './style/index.css';
import './style/carousel.css';

class App extends React.Component{
  app: this;

  constructor (props: {} | Readonly<{}>) {
    super(props);
    this.app = this;
  }

  render() {

    return (
      <>
        <Menu />

        <main className="app container">
        <GoogleOAuthProvider clientId={firebaseConfigEncryp.googleOAuthClientId}>
          <Router >
            <Switch>
              <Route exact path='/' render={(props) => <Home app={this} {...props} /> }   />

              <Route component={PageError} />
            </Switch>
          </Router>

          <Footer />
          </GoogleOAuthProvider>
        </main>
      </>
    );

  }

}

export default App;
