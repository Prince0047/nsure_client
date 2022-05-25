import React, { useState } from 'react';
import base_url from '../../api/bootapi';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'react-credit-cards/es/styles-compiled.css';

function Payment(props) {
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const [paymentForm, setPaymentForm] = useState({
    fee: props.fee,
    insurance_id: '',
  });

  const insuranceForm = {
    user_id: props.insurance.userId,
    policy_id: props.insurance.policyId,
  };

  const form = {};
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(`${base_url}/insurance/new`, form)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          props.auth(true);
          localStorage.setItem('user_id', res.data.id);

          navigate('/policy');
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='container py-5'>
        {/* For demo purpose */}
        <div className='row mb-4' style={{ marginBottom: '0px' }}>
          <div className='col-lg-8 mx-auto text-center'>
            <h1 className='display-4'>Payment</h1>
            <p className='lead mb-0'>
              Easily build a well-structured credit card form using Bootstrap 4
            </p>
            <p className='lead'>
              Snippet by{' '}
              <a href='https://bootstrapious.com/snippets'>Bootstrapious</a>
            </p>
          </div>
        </div>
        {/* End */}
        <div className='row'>
          <div className='col-lg-7 mx-auto'>
            <div className='bg-white rounded-lg shadow-sm p-5'>
              {/* Credit card form tabs */}
              <ul
                role='tablist'
                className='nav bg-light nav-pills rounded-pill nav-fill mb-3'
              >
                <li className='nav-item'>
                  <h5
                    data-toggle='pill'
                    href='#nav-tab-card'
                    className='nav-link active rounded-pill display-8'
                  >
                    <i className='fa fa-credit-card' />
                    Credit Card
                  </h5>
                </li>
              </ul>
              {/* End */}
              {/* Credit card form content */}
              <div className='tab-content'>
                {/* credit card info*/}
                <div id='nav-tab-card' className='tab-pane fade show active'>
                  {/* <p className='alert alert-success'>
                    Some text success or error
                  </p> */}
                  <form role='form'>
                    <div className='form-group'>
                      <label htmlFor='username'>Full name (on the card)</label>
                      <input
                        type='text'
                        name='username'
                        placeholder='Jason Doe'
                        required
                        className='form-control'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='cardNumber'>Card number</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          name='cardNumber'
                          placeholder='Your card number'
                          className='form-control'
                          required
                        />
                        <div className='input-group-append'>
                          <span className='input-group-text text-muted'>
                            <i className='fa fa-cc-visa mx-1' />
                            <i className='fa fa-cc-amex mx-1' />
                            <i className='fa fa-cc-mastercard mx-1' />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-8'>
                        <div className='form-group'>
                          <label>
                            <span className='hidden-xs'>Expiration</span>
                          </label>
                          <div className='input-group'>
                            <select
                              className='form-control'
                              name='month'
                              id='month'
                              form='carform'
                            >
                              <option value='01'>01</option>
                              <option value='02'>02</option>
                              <option value='03'>03</option>
                              <option value='04'>04</option>
                              <option value='05'>05</option>
                              <option value='06'>06</option>
                              <option value='07'>07</option>
                              <option value='08'>08</option>
                              <option value='09'>09</option>
                              <option value='10'>10</option>
                              <option value='11'>11</option>
                              <option value='12'>12</option>
                            </select>
                            <select
                              className='form-control'
                              name='year'
                              id='year'
                              form='carform'
                            >
                              <option value='2022'>2022</option>
                              <option value='2023'>2023</option>
                              <option value='2024'>2024</option>
                              <option value='2025'>2025</option>
                              <option value='2026'>2026</option>
                              <option value='2027'>2027</option>
                              <option value='2028'>2028</option>
                              <option value='2029'>2029</option>
                              <option value='2030'>2030</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='form-group mb-4'>
                          <label
                            data-toggle='tooltip'
                            title='Three-digits code on the back of your card'
                          >
                            CVV
                            <i className='fa fa-question-circle' />
                          </label>
                          <input
                            type='tel'
                            required
                            className='form-control'
                            maxLength='3'
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='subscribe btn btn-primary btn-block rounded-pill shadow-sm'
                      //   onClick={handleSubmit}
                    >
                      Pay ${props.fee}
                    </button>
                  </form>
                </div>
                {/* End */}
                {/* Paypal info */}
                <div id='nav-tab-paypal' className='tab-pane fade'>
                  <p>Paypal is easiest way to pay online</p>
                  <p>
                    <button
                      type='button'
                      className='btn btn-primary rounded-pill'
                    >
                      <i className='fa fa-paypal mr-2' /> Log into my Paypal
                    </button>
                  </p>
                  <p className='text-muted'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                {/* End */}
                {/* bank transfer info */}

                {/* End */}
              </div>
              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
