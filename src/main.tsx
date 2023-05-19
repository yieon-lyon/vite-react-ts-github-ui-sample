import React from 'react'
import ReactDOM from 'react-dom/client'

import { LoaderSpinner } from './components'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Suspense fallback={<LoaderSpinner color="#1D1D1D" />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
)