import React, { useState } from 'react';
import base_url from '../api/bootapi';
import axios from 'axios';
import '../assets/styles/myaccount.scss';

function MyAccount(props) {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    policies: [],
  });

  useState(() => {
    // const userId = JSON.stringify(props.userId);
    console.log(props.userId);
    axios
      .get(`${base_url}/users/${props.userId}`)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          const _user = {
            userName: res.data.name,
            email: res.data.email,
            policies: res.data.insurance,
          };
          setUser(_user);
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className='myaccount'>
      <div className='myaccount-container'>
        <div className='heading'>
          <h2>Hello, {user.userName} </h2>
        </div>
        <div className='user-details'>
          <h4>{user.email}</h4>
          <ul>
            {user.policies.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
