import './sign-up-form.styles.scss';

import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '', 
    password: '',
    confirmPassword: ''
}

const SignUpForm =  () => {
    const [formFeilds, setFormFeilds] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFeilds;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFeilds({...formFeilds, [name]: value})
    }

    const onSubmit = () => {

    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput 
                    label='Display Name'
                    inputOptions = {{
                        type: 'text',
                        required: true,
                        onChange: handleChange,
                        name: 'displayName', 
                        value: displayName
                    }}/>

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

                <FormInput 
                    label="Confirm Password"
                    inputOptions = {{
                        type: 'password',
                        required: true,
                        onChange: handleChange,
                        name: 'confirmPassword', 
                        value: confirmPassword
                    }}/>

                <Button type="submit">Sign up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;