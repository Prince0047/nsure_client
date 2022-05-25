import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../api/bootapi';
// import '../assets/styles/auth.scss';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function SignUp() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
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

  const handleSubmit = () => {
    console.log('Sign In');
    console.log(form);

    // axios
    //   .post(`${base_url}/users/login`, form)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className='login-form'>
      <h2>Sign In</h2>
      <Form className='form'>
        <FormGroup>
          <Label for='firstName'>First Name</Label>
          <Input
            type='email'
            id='firstName'
            placeholder='John'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>Last Name</Label>
          <Input
            type='email'
            id='lastName'
            placeholder='Doe'
            name='lastName'
            value={form.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='exampleEmail'>Email</Label>
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
          <Label for='examplePassword'>Password</Label>
          <Input
            type='password'
            name='password'
            id='examplePassword'
            placeholder='********'
          />
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default SignUp;
