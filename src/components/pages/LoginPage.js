import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { Person } from '@material-ui/icons'

const LoginPage = () => {
  const dispatch = useDispatch()

  const login = () => {
    dispatch({ type: 'UPDATE_USER_LOG', payload: true })
  }

  const logInStyle = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#D5BFBF',
      top: 0,
      left: 0,
    },
    loginForm: {
      backgroundColor: '#8CA1A5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& >:nth-child(2)': {
        marginTop: '30px',
      },
      padding: '60px 60px',
      borderRadius: '50%',
      boxShadow: '0 5px 10px rgba(0,0,0,.5),0 5px 10px rgba(0,0,0,.5)',
    },
    formStyle: {
      display: 'inline-block',
      alignItems: 'space-between',
      marginTop: '15px',

      //   width: '100%',
      '& input': {
        marginLeft: '10px',
        outline: 'none',
        borderRadius: '5px',
        fontSize: '24px',
      },
      '& button': {
        fontSize: '24px',
        borderRadius: '24px',
        padding: '10px 50px',
        width: '100%',
        cursor: 'pointer',
        backgroundColor: '#D4B499',
        '&:hover': {
          backgroundColor: '#A2CDCD',
        },
      },
    },
    logInUserStyle: {
      position: 'absolute',
      fontSize: '72px',
      marginTop: '-90px',
      border: '1px solid',
      borderRadius: '50%',
      backgroundColor: '#E0C097',
    },
  }))

  const style = logInStyle()

  return (
    <div className={style.root}>
      <div className={style.loginForm}>
        <Person className={style.logInUserStyle} />
        <div className={style.formStyle}>
          {/* <label>User Name</label> */}
          <input type='text' placeholder='User Name' />
        </div>
        <div className={style.formStyle}>
          {/* <label>Password</label> */}
          <input type='password' placeholder='Password' />
        </div>
        <div className={style.formStyle}>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
