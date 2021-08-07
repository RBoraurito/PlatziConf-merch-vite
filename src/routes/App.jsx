import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Checkout,
  Payment,
  Information,
  Success,
  NotFound
} from '@/containers'

import { Layout } from '@/components';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/information" component={Information} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route exact path="/checkout/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  )

export default App