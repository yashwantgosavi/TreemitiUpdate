import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <React.Fragment>
        <section id='errorSec'>
            <h1>Oops !!!</h1>
            <p>Unexpected Error Occured</p>
            <button className='errorBtn'><NavLink to="/">Go To Home Page</NavLink></button>
        </section>
    </React.Fragment>
    
  )
}

export default ErrorPage