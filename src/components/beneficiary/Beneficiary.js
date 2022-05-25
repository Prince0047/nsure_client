import React, { useState, useEffect } from 'react';
import BeneficiaryCard from './BeneficiaryCard';
import base_url from '../../api/bootapi';
import axios from 'axios';

function Beneficiary() {
  const [beneficiaryList, setBeneficiaryList] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/beneficiary/4028ab9780e5c93e0180e5d9d22f0002`)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          console.log('data present');
          setBeneficiaryList(res.data);
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Beneficiary</h1>
      <BeneficiaryCard beneficiaryList={beneficiaryList} />
    </div>
  );
}

export default Beneficiary;
