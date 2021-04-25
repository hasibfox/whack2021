import React from 'react';
import './Signup.css';

import {Link} from  'react-router-dom';

import Form from './Form';
import validationIn from './ValidationIn';

const Signin = ({submitForm}) => {
    const {handleChange,values, handleSubmit, errors} = Form(submitForm, validationIn);

    return (
        <div className="fade">

        
        <div className="sign-container">
            
            <div className="signin-box">
            <div className="inright">
                <div style={{
                    zIndex:'423'
                }}>

                    <h1>Don't have an account?</h1>
                    <Link to = '/sign-up'>
                    <button> Join Now</button>
                    </Link>
                </div>
                <div className="okay"></div>

            </div>
            <div className="inleft">
                <img className="already" src="https://www.teachkentucky.com/tky-content/uploads/2016/03/wesleyan-logo.png"></img>
                <h1>Log into We(b)shop!</h1>
                <form onSubmit={handleSubmit} className="signin-form" noValidate>
               
                <div>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value = {values.email}
                    onChange={handleChange}
                    />
                {errors.email && <p className="error-messages">{errors.email}</p>}
                </div>
                <div>
                    <input type="password" 
                    name="password" 
                    placeholder="Password"
                    value = {values.password}
                    onChange={handleChange}
                    />
                {errors.password && <p className="error-messages">{errors.password}</p>}
                </div>
                
                
                    <div className="sign-up-btn">
                            <button >Sign Up</button>
                    </div>
                    
                </form>
            
            </div>
            </div>
        </div>

            
        
        </div>
    )
}

export default Signin
