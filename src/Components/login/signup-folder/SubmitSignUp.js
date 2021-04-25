import React, {useState} from 'react';
import Signup from './Signup';
import { Redirect } from "react-router-dom";

const SubmitSignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    console.log('sdfs')
    setIsSubmitted(true);
  }
    return (
        <div>
            {!isSubmitted ? 
          <Signup submitForm = {submitForm}/>  : <Redirect to = '/' />
            
          }
        </div>
    );
};

export default SubmitSignUp;
