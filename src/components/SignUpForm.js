import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../store/actions/authentication'

function SignUpForm() {
    const token = useSelector((state) => state.authentication.token)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(register(username, email, password))
    }

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const updateConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    if (token) {
        return <Redirect to="/" />
    }

    return (
        <div className="signUpForm">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={updateUsername}
                />
                <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={updatePassword}
                />
                <input
                type="password"
                placeholder="password"
                value={confirmPassword}
                onChange={updateConfirmPassword}
                />
                <button type="submit">Sign Up!</button>
            </form>

        </div>
    )
}

export default SignUpForm
