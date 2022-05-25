import React, { useEffect, useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Policy from './components/policy/Policy';
import Beneficiary from './components/beneficiary/Beneficiary';
import BeneficiaryForm from './components/beneficiary/BeneficiaryForm';
import Payment from './components/payment/Payment';
import MyAccount from './components/MyAccount';
import Rating from './components/Rating';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const localUserId = localStorage.getItem('user_id');
  const [insurance, setInsurace] = useState({
    userId: '',
    policyId: '',
    beneficiaries: [],
    payment: 0,
  });

  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      setIsloggedIn(true);
      handleChange('userId', localStorage.getItem('user_id'));
    }
  }, []);

  function handleAuth(boolValue) {
    setIsloggedIn(boolValue);

    if (boolValue) {
      handleChange('userId', localStorage.getItem('user_id'));
    }
  }

  const handleChange = (key, value) => {
    setInsurace((prevInsurace) => {
      return {
        ...prevInsurace,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    console.log(insurance);
  }, [insurance]);

  return (
    <Router>
      <Header auth={handleAuth} isLoggedIn={isLoggedIn} />
      <Routes>
        {isLoggedIn === false && (
          <Route
            exact
            path='/login'
            element={
              <Login
                isLoggedIn={isLoggedIn}
                auth={handleAuth}
                changeState={handleChange}
              />
            }
          />
        )}
        <Route
          exact
          path=''
          element={<Home isLoggedIn={isLoggedIn} auth={handleAuth} />}
        />
        {isLoggedIn == false && (
          <Route
            exact
            path='/signin'
            element={<SignUp isLoggedIn={isLoggedIn} />}
          />
        )}

        <Route
          path='/policy'
          element={
            <Policy changeState={handleChange} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path='/beneficiary'
          element={<Beneficiary changeState={handleChange} />}
        />
        {isLoggedIn && (
          <Route
            path='/beneficiary/add'
            element={
              <BeneficiaryForm
                changeState={handleChange}
                insurance={insurance}
                isLoggedIn={isLoggedIn}
              />
            }
          />
        )}
        <Route
          path='/payments'
          element={
            <Payment changeState={handleChange} fee={insurance.payment} />
          }
        />
        {isLoggedIn && (
          <Route
            path='/myaccount'
            element={<MyAccount userId={insurance.userId} />}
          />
        )}
        <Route path='/rating' element={<Rating />} />
        <Route exact path='/payment' element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
