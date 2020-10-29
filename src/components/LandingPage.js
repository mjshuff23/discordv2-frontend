import React from 'react'
import SignUpForm from './SignUpForm'
import './stylesheets/LandingPage.css'

function LandingPage() {
    return (
        <div className="landingPage">
            <h1>I'm the landing page</h1>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default LandingPage
