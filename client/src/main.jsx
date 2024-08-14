import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Auth from './pages/Auth.jsx'
import ClientDashboard from './pages/ClientDasboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import AuthProvider from './context/AuthContext.jsx'

import { userLoader } from './loaders/userLoader.jsx'
import { UserProvider } from './userData/UserContext.jsx'
import ErrorBoundary from './error/ErrorBoundry.jsx'
import NotFound from './error/NotFound.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './styles/mui/theme.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    ),
    
    children: [
      {
        index: true,
        element: <Auth />
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <UserProvider>
              <ClientDashboard />
            </UserProvider>
          </ProtectedRoute>
        ),
        loader: userLoader,
        errorElement: <ErrorBoundary />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
