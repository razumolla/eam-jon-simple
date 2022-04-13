import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='sign-up-btn'>
                    New to Ema-John?
                    <Link className='form-link' to="/signup"> Create an account</Link>
                </p>
                <div className='or-break'>
                    <p className='line'></p>
                    <p className='or-text'>or</p>
                    <p className='line'></p>
                </div>
                <button className='google-sign-btn'>
                    <div className='google-icon-section'>
                        <FcGoogle className='google-icon' />
                        <p>Continue with Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;