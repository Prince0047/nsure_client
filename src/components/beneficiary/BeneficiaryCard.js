import React from 'react';
import { Table } from 'reactstrap';

function BeneficiaryCard(props) {
  const beneficiaries = props.beneficiaryList.map((beneficiary, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{index + 1}</th>
        <td>{beneficiary.name}</td>
        <td>{beneficiary.age}</td>
        <td>{beneficiary.occupation}</td>
        <td>{beneficiary.address}</td>
      </tr>
    );
  });
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{beneficiaries}</tbody>
      </Table>
    </div>
  );
}

export default BeneficiaryCard;
