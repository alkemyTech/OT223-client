import React, { useState } from 'react';

const LoginJson = {};

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const access = async (data) => {
    data.preventDefault();
    LoginJson.email = email;
    LoginJson.pass = pass;
    // para probar console.log(LoginJson)
  };

  return (
    <form onSubmit={access}>
      <input
        name='email'
        type='email'
        value={email}
        onChange={(data) => setEmail(data.target.value)}
      />

      <input
        name='password'
        type='password'
        value={pass}
        onChange={(data) => setPass(data.target.value)}
      />

      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
