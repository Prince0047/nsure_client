import React, { useEffect, useState } from 'react';
import base_url from '../../api/bootapi';
import axios from 'axios';
import PolicyCard from './PolicyCard';
import '../../assets/styles/policy.scss';

import { Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';

function Policy(props) {
  const [policyList, setPolicyList] = useState([]);
  const [selectPolicy, setSelectPolicy] = useState('');

  useEffect(() => {
    getAllPolicy();
  }, []);

  useEffect(() => {
    props.changeState('policyId', selectPolicy);
  }, [selectPolicy]);

  const getAllPolicy = () => {
    axios
      .get(`${base_url}/policy`)
      .then((res) => {
        // console.log(res.data);
        setPolicyList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function selectPolicyId(id) {
    // console.log(id);
    setSelectPolicy(id);
  }

  const navigate = useNavigate();

  function handleNext() {
    console.log('select Policy ', selectPolicy);
    if (selectPolicy == '') {
      alert('Select one policy');
    } else {
      navigate('/beneficiary/add');
    }
  }

  //   policyList.map((policy) => console.log(policy.name));

  const policyListComponenet = policyList.map((policy) => {
    return (
      <PolicyCard
        key={policy.id}
        name={policy.name}
        type={policy.type}
        term={policy.term}
        coverage={policy.coverage}
        isSelected={policy.id === selectPolicy}
        handleClick={() => selectPolicyId(policy.id)}
        isLoggedIn={props.isLoggedIn}
      />
    );
  });

  return (
    <div className='policy'>
      <div className='policy-container'>
        <div className='heading'>
          <h1>Policies</h1>
        </div>
        {policyListComponenet}

        <Button className='next' onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Policy;
