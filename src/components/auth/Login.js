import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../../assets/styles/auth.scss';
import b2 from '../../assets/images/b2.jpg';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Login(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Log In');
    // console.log(form);

    axios
      .post(`${base_url}/users/login`, form)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          localStorage.setItem('user_id', res.data.id);
          props.auth(true);
          navigate('/policy');
        } else {
          alert('Incorrect email or password');
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-form'>
      <div className='login-form-container'>
        <div className='form-heading'>
          <h2>Sign In</h2>
        </div>
        <Form className='form'>
          <FormGroup>
            <Label className='label' for='exampleEmail'>
              Email
            </Label>
            <Input
              type='email'
              id='exampleEmail'
              placeholder='example@example.com'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label className='label' for='examplePassword'>
              Password
            </Label>
            <Input
              type='password'
              id='examplePassword'
              placeholder='********'
              name='password'
              value={form.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button className='button primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        <div className='signin'>
          <Link className='left' to='/signin'>
            <Button className='button secondary'>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
