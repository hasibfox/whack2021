export default function validation(values) {
    let errors = {}

    if (!values.firstname.trim()) {
        errors.firstname = "Please enter your first name."
    };
    if (!values.lastname.trim()) {
        errors.lastname = "Please enter your last name."
    };
    
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    }
    
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.confirmpassword) {
    errors.confirmpassword = 'Password is required';
    } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = 'Passwords do not match';
    }
    

    return errors;
}