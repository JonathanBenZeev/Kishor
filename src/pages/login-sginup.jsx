import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

export const LoginSignup = () => {
  const { pathname } = useLocation()
  const [isSignup, setIsSignup] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
  })

  const onIsSignup = () => {
    if (pathname === '/signup') setIsSignup(true)
    else setIsSignup(false)
  }

  useEffect(() => {
    onIsSignup()
    clearFields()
  }, [pathname])

  const clearFields = () => {
    setCredentials({
      username: '',
      password: '',
      fullname: '',
    })
  }

  const onSignUp = () => {
    console.log('fff')
  }
  const onLogin = () => {
    console.log('fff')
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
                // onChange={handleChange}
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
            // onChange={handleChange}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            value={credentials.password}
            // onChange={handleChange}
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
