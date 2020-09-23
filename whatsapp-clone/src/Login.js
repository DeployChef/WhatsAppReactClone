import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {
    
const signIn = () => {

}

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png"
                alt=""
                />

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
