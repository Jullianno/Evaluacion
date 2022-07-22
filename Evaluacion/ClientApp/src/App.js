import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Portada from './components/Portada';
import Mensaje from './components/Mensaje';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/portada' component={Portada} />
        <Route path='/mensaje' component={Mensaje} />
      </Layout>
    );
  }
}
