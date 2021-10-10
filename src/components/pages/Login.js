import React, { useState } from 'react';
const url = 'https://122.201.28.34:8080/api/MyCokeLogin';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClick = () => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: name,
            pass: password
        })
    }).then((data) => {
        console.log(data, 'data ')
    }).catch(e => {
        console.log(e, 'err')
    })
  };

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
};

export default Login;
