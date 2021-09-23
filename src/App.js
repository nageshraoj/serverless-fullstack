import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import HeaderComponent from './components/HeaderComponent'
import CartsPage from './components/pages/CartsPage'
import HomePage from './components/pages/HomePage'
import ProductsPage from './components/pages/ProductsPage'
import ProfilePage from './components/pages/ProfilePage'
import LoginPage from './components/pages/LoginPage'
import theme from './components/styles/theme'
import CheckoutPage from './components/pages/CheckoutPage'

const App = () => {
  const isLogin = useSelector((state) => state.isLogin)
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLogin ? (
          <BrowserRouter>
            <HeaderComponent />
            <Route path='/' exact component={HomePage} />
            <Route path='/Home' exact component={HomePage} />
            <Route path='/Products' exact component={ProductsPage} />
            <Route path='/Carts' exact component={CartsPage} />
            <Route path='/Checkout' exact component={CheckoutPage} />
            <Route path='/Profile' exact component={ProfilePage} />
          </BrowserRouter>
        ) : (
          <LoginPage />
        )}
      </ThemeProvider>
    </>
  )
}

export default App
