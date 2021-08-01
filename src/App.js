import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from "./context";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// react lazy 코드 스플리팅 
const DefaultLayout = React.lazy(() => import('./Components/Layout/defaultLayout'));
const OrderLayout = React.lazy(() => import('./Components/Layout/orderLayout'));
const DetailLayout = React.lazy(() => import('./Components/Layout/detailLayout'));

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
              <Route exact path="/Order" name="Order" render={(props) => <OrderLayout {...props} />} />
              <Route exact path="/details" name="Detail" render={(props) => <DetailLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App