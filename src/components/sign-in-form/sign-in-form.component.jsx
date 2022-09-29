import './sign-in-form.styles.scss';
import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { UserContext } from '../../context/user.context';

const defaultFormFields = {
    email: '', 
    password: '',
}

const user = {name: null, email: null};

const SignInForm = () => {

    const [formFeilds, setFormFeilds] = useState(defaultFormFields);
    const { email, password } = formFeilds;

    const {currentUser, setCurrentUser} = useContext(UserContext);  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFeilds({...formFeilds, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        user.email = email;
        setCurrentUser(user);
        //console.log(setCurrentUser)
    }

    return (
       <div>    
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>        
            <form onSubmit={onSubmit}>
                <FormInput 
                    label="Email"
                    inputOptions = {{
                        type: 'email',
                        required: true,
                        onChange: handleChange,
                        name: 'email', 
                        value: email
                    }}/>
                
                <FormInput 
                    label="Password"
                    inputOptions = {{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: 'password', 
                        value: password
                    }}/>

                <div className='buttons-container'>
                    <Button buttonType="inverted" type="submit">Sign in</Button>
                </div>
            </form>
       </div>
    )
}

export default SignInForm;