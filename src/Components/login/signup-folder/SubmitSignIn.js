import React, {useState} from 'react';

import Signin from './Signin';
import { Redirect } from "react-router-dom";

const SubmitSignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    console.log('sdfsd')
    setIsSubmitted(true);
  }
    return (
        <div>
            {!isSubmitted ? 
          <Signin submitForm = {submitForm}/>  : <Redirect to = '/' />
            
          }
        </div>
    );
};

export default SubmitSignIn
