
import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/reducers/userSlice';
import './LoginPage.css';
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const googleDiv = React.useRef<HTMLDivElement>(null);
  const handleCallbackResponse = (response: google.accounts.id.CredentialResponse) => {
    if(response.credential) {
    const decoded = jwt_decode(response.credential);
    dispatch(setUser(decoded)); //imperative aproach
    console.log("Decoded JWT",decoded);
    const x = document.getElementById('sign-in-google') ; // react ref hook
    // const y = googleDiv.current
    if(x){
       x.hidden=true
      navigate('/home');
      // y.hidden=true;
    }
  }
    
  };
  useEffect(() => {
    /* global google */
   google.accounts.id.initialize({
      client_id: '282669505556-8hn58876v5ktiqd998vmlgki3n7l0pro.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(
      (document.getElementById('sign-in-google') as HTMLInputElement),
      {theme: 'outline', size: 'large', type: 'standard'},
    )
    //google.accounts.id.prompt();
      
    
  }, []);
  return (
    <div className='login-container'>
      <h1>Welcome to Post Platform!</h1>
      <h3 className='login-container__subtitle'>Sign In </h3>
      <div 
      // ref={googleDiv} 
      id="sign-in-google"></div>
    </div>
  )
}

export  {LoginPage}