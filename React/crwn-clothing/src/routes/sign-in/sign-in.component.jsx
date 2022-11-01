import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAU7s0p9scauVOaLa6aRLxegTpLdI647jY",
    authDomain: "clothing-website-app.firebaseapp.com",
    projectId: "clothing-website-app",
    storageBucket: "clothing-website-app.appspot.com",
    messagingSenderId: "790943989755",
    appId: "1:790943989755:web:7ce32553160bcbfa16955e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provide = new GoogleAuthProvider({
    prompt: "select_account"
  });

const SignIn = () => {
    return (
        <div>
            <h1>Sign-In Page</h1>
        </div>
    );
};

export default SignIn;