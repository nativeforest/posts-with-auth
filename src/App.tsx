import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const handleCallbackResponse = (response: google.accounts.id.CredentialResponse) => {
    console.log("Encoded JWT",response.credential);
  };
  useEffect(() => {
    /* global google */
   google.accounts.id.initialize({
      client_id: '282669505556-8hn58876v5ktiqd998vmlgki3n7l0pro.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(
      (document.getElementById('signInDiv') as HTMLInputElement),
      {theme: 'outline', size: 'large', type: 'standard'},
    )
      
    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="signInDiv"></div>
        <Counter />
      </header>
    </div>
  );
}

export default App;
