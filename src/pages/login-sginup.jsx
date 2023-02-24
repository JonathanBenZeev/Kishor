import { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { login, signup } from '../store/user.actions'

export const LoginSignup = () => {
  const { pathname } = useLocation()
  const [isSignup, setIsSignup] = useState(false)
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
  })

  const onIsSignup = () => {
    if (pathname === '/signup') setIsSignup(true)
    else setIsSignup(false)
  }

  useEffect(() => {
    onIsSignup()
    clearFields()
  }, [pathname])

  const handleChange = (ev) => {
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
  }

  const clearFields = () => {
    setCredentials({
      username: '',
      password: '',
      fullname: '',
      email: '',
    })
  }

  const onSignUp = async (ev = null) => {
    if (ev) ev.preventDefault()
    if (
      !credentials.username ||
      !credentials.password ||
      !credentials.fullname ||
      !credentials.email
    )
      return
    try {
      await signup(credentials)
      navigate('/')
    } catch (err) {
      console.log('Signup failed', err)
    }
  }
  const onLogin = async (ev = null) => {
    if (ev) ev.preventDefault()
    if (!credentials.username || !credentials.password) return
    try {
      await login(credentials)
      navigate('/')
    } catch (err) {
      console.log('Logged in failed', err)
    }
  }
  return (
    <section className='login-page flex column'>
      <header className='login-header'>
        <h1>Kishor</h1>
      </header>
      <div className='login-signup-container'>
        <form className='flex column ' onSubmit={isSignup ? onSignUp : onLogin}>
          {isSignup ? (
            <>
              <h1>Sign up for your account</h1>
              <input
                type='text'
                id='fullname'
                name='fullname'
                placeholder='Enter full name'
                value={credentials.fullname}
                onChange={handleChange}
              />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter email address'
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </>
          ) : (
            <h1>Login to Kishor</h1>
          )}
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button className={`logbtn ${isSignup ? 'signup' : 'login'}`}>
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
        </form>
        <hr />
        <div className='dif-choice flex'>
          <Link to='/'>Back Home</Link>
          {isSignup ? (
            <Link to='/login'> Log In</Link>
          ) : (
            <Link to='/signup'> Sign up for an account</Link>
          )}
        </div>
      </div>
    </section>
  )
}
