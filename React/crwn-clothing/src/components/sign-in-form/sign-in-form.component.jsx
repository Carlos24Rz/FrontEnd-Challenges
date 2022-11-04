import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.style.scss';

import {
    signInWithGooglePopup,
    signInUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const defaultSignInFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    
    const [signInFields, setSignInFields] = React.useState(defaultSignInFields);
    const {email, password} = signInFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setSignInFields({...signInFields,[name]: value});
    };
    
    
    const logGoogleUser = async () => {
        try{
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user);
        } catch (error) {
            console.log(error.message);
        }
        
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try {
            const {user} = await signInUserWithEmailAndPassword(email,password);
            setSignInFields(defaultSignInFields);
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label= "Password" type="password" required  name="password" value={password} onChange={handleChange} />
                <div className="button-group">
                    <Button type="submit">Sign In</Button>
                    <Button type= "button" buttonType="google" onClick={logGoogleUser}>Sign in with google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;