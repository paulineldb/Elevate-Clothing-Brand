import React, { useState } from 'react';
import logo from '../elevate-logo-transparent.png';
import './Header.css';

function Header({ isSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    if (!email || !password) {
        return false;
    }
    setSignedIn(true);
};

  return (
    <div id="header">
      <img src={logo} alt="Logo" id="brand-logo" />
      <h1 id="brand-name">Elevate | Urban Streetwear</h1>
      <div id="sign-in-form-block">
        {!signedIn ? (
            <div id="sign-in-form">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button id="sign-in-button" onClick={handleSignIn}>Sign In</button>
            </div>
        ) : (
            <p id="welcome-back">Welcome back!</p>
        )}
      </div>
    </div>
  );
}

export default Header;

