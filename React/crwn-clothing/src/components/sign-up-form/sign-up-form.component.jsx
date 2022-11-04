import React from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.style.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = React.useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]: value});
    };

    const handleSubmit = async (event) => {
        
        event.preventDefault();
    
        //Confirm passwords match
        if(password !== confirmPassword){
            console.log("Passwords Don't Match")
            return;
        }

        try {
           const {user} = await createAuthUserWithEmailAndPassword(email,password);
           user.displayName = displayName.trim();
           const userDocRef = await createUserDocumentFromAuth(user);
           setFormFields(defaultFormFields);
        } catch (error){
            console.log(error.message);
            return;
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don´t have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required name="displayName" value={displayName} onChange={handleChange}/>
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label= "Password" type="password" required  name="password" value={password} onChange={handleChange} />
                <FormInput label= "Repeat Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;