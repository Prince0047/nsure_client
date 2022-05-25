import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import BeneficiaryCard from './BeneficiaryCard';

import '../../assets/styles/beneficiary.scss';

function BeneficiaryForm(props) {
  const [beneficiaryList, setBeneficiaryList] = useState([]);

  useEffect(() => {
    props.changeState('beneficiaries', beneficiaryList);
    props.changeState('payment', 100 * beneficiaryList.length);
  }, [beneficiaryList]);

  const [beneficiary, setBeneficiary] = useState({
    name: '',
    age: '',
    occupation: '',
    address: '',
  });

  function handleChange(e) {
    setBeneficiary((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    // console.log(beneficiary);

    setBeneficiaryList((prev) => [...prev, beneficiary]);
  }

  // Handle Next
  const navigate = useNavigate();

  function handleNext() {
    if (props.isLoggedIn && props.insurance.beneficiaries.length > 0) {
      navigate('/payment');
    } else {
      alert('Atleast One Beneficiary should be added.');
    }
  }

  console.log(beneficiaryList);
  return (
    <div className='beneficiary-container'>
      <div className='beneficiary-form'>
        <div className='beneficiary-list'>
          <BeneficiaryCard beneficiaryList={beneficiaryList} />
        </div>
        <div className='heading'>
          <h1>BeneficiaryForm</h1>
        </div>
        <Form className='beneficiary-input-form'>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input
              id='name'
              name='name'
              placeholder='John Doe'
              type='text'
              value={beneficiary.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='age'>Age</Label>
            <Input
              id='age'
              name='age'
              placeholder='32'
              type='number'
              value={beneficiary.age}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='occupation'>Occupation</Label>
            <Input
              id='occupation'
              name='occupation'
              placeholder='Teacher'
              type='text'
              value={beneficiary.occupation}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleAddress'>Address</Label>
            <Input
              id='exampleAddress'
              name='address'
              placeholder='1234 Main St London'
              value={beneficiary.address}
              onChange={handleChange}
            />
          </FormGroup>
          <Button className='add' onClick={handleSubmit}>
            Add
          </Button>
        </Form>

        <Button className='next' onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default BeneficiaryForm;
