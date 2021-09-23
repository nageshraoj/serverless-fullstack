import { AppBar, Toolbar, Tabs, Tab, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Home,
  ShoppingCart,
  Payment,
  LocalMall,
  AccountCircle,
  ExitToApp,
} from '@material-ui/icons'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch({ type: 'UPDATE_USER_LOG', payload: false })
  }

  const headerStyle = makeStyles((theme) => ({
    toolBarTheme: {
      ...theme.mixins.toolbar,
    },
    tbsStyle: {
      marginLeft: 'auto',
      color: '#FFE9D6',
      fontSize: '24px',
    },
    tbStyle: {
      '&:hover': {
        backgroundColor: '#B4846C',
        borderRadius: '10px',
      },
    },
    tbActive: {
      backgroundColor: '#CA8A8B',
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '#B4846C',
        borderRadius: '10px',
      },
    },
    wrapper: {
      display: 'inline-block',
      alignItems: 'space-between',
      width: '100%',
      fontSize: '18px',
      color: '#fff',
      cursor: 'pointer',
    },
  }))

  const styles = headerStyle()
  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor='primary'
            className={styles.tbsStyle}
            value={index}
            onChange={(e, value) => setIndex(value)}
          >
            <Tab
              className={index === 0 ? styles.tbActive : styles.tbStyle}
              icon={
                <span className={styles.wrapper}>
                  <Home />
                  <label>Home</label>
                </span>
              }
              // label='Home'
              to='/Home'
              component={Link}
            />
            <Tab
              className={index === 1 ? styles.tbActive : styles.tbStyle}
              // label='Products'
              icon={
                <span className={styles.wrapper}>
                  <LocalMall />
                  <label>Products</label>
                </span>
              }
              to='/Products'
              component={Link}
            />
            <Tab
              className={index === 2 ? styles.tbActive : styles.tbStyle}
              // label='Carts'
              icon={
                <span className={styles.wrapper}>
                  <ShoppingCart />
                  <label>Carts</label>
                </span>
              }
              to='/Carts'
              component={Link}
            />
            <Tab
              className={index === 3 ? styles.tbActive : styles.tbStyle}
              // label='Checkout'
              icon={
                <span className={styles.wrapper}>
                  <Payment />
                  <label>Checkout</label>
                </span>
              }
              to='/Checkout'
              component={Link}
            />
            <Tab
              className={index === 4 ? styles.tbActive : styles.tbStyle}
              // label='Profile'
              icon={
                <span className={styles.wrapper}>
                  <AccountCircle />
                  <label>Profile</label>
                </span>
              }
              to='/Profile'
              component={Link}
            />
            <Tab
              className={styles.tbStyle}
              // label='LogOut'
              icon={
                <span className={styles.wrapper}>
                  <ExitToApp />
                  <label>LogOut</label>
                </span>
              }
              onClick={logOut}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={styles.toolBarTheme} />
    </>
  )
}

export default HeaderComponent
