import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import OneSignal from 'react-onesignal';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

class App extends Component {

  componentDidMount() {
    OneSignal.init({
      appId: "cca1bd1f-8df1-47e4-a28e-454eeb0b5ab3",
      safari_web_id: "web.onesignal.auto.54d60a3d-c0d7-4ae1-b490-c29a9cfa7b70",
      notifyButton: {
        enable: true,
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
