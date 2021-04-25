
import React from 'react';
import './Signup.css';

import {Link} from  'react-router-dom';
import Form from './Form';
import validation from './Validation';


function Signup({submitForm}) {

    const {handleChange,values, handleSubmit, errors} = Form(submitForm, validation);

    return (
        <div className="fade">
        
        <div className="sign-container">
            <div className="signup-box">
                <div className="left">
                    <div style={{
                        zIndex:'423'
                    }}>

                        

                        <h1>Already have an account?</h1>
                        <Link to = '/sign-in'>
                        <button > Login Now</button>
                        </Link>
                        
                    </div>
                    <img className="no"
                    
                    src="https://www.teachkentucky.com/tky-content/uploads/2016/03/wesleyan-logo.png"></img>
                    <div className="okay"></div>

                </div>
                <div className="right">
                <h2 className="box-title">Get the groceries you need today!</h2>
                <form onSubmit={handleSubmit} className="sign-form" noValidate>
                <div>
                    <input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name"
                    value = {values.firstname}
                    onChange={handleChange}
                    />
                {errors.firstname && <p className="error-messages">{errors.firstname}</p>}
                </div>
                <div>
                    <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name"
                    value = {values.lastname}
                    onChange={handleChange}
                    />
                {errors.lastname && <p className="error-messages">{errors.lastname}</p>}
                </div>
               
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
                <div>
                    <input 
                    type="password" 
                    name="confirmpassword" 
                    placeholder="Confirm Password"
                    value = {values.confirmpassword}
                    onChange={handleChange}
                    />
                {errors.confirmpassword && <p className="error-messages">{errors.confirmpassword}</p>}
                </div>
                
                    <div className="sign-up-btn">
                            <button>Sign Up</button>
                    </div>
                    <p className="policy"> By signing up, you agree to our Terms Data Policy and Cookies Policy.</p>
                   
                </form>
                
                </div>
            </div>

        
        </div>
        </div>
        
    )
}

export default Signup
