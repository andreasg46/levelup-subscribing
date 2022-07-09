import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Landing = React.lazy(() => import('./views/dashboard/Landing'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/landing', name: 'Dashboard', element: Landing },
]

export default routes
