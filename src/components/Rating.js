import React from 'react';
import { Button } from 'reactstrap';
import '../assets/styles/myaccount.scss';

function Rating() {
  //   const [rating, setRating] = useState(10);

  return (
    <div className='rating'>
      <div className='heading'>
        <h2>Rate your Experience with Us.</h2>
      </div>
      <div className='rating-form'>
        <div className='rating-scale'>
          <select className='form-control' name='rating' id='rating'>
            <option value='10'>10 Fantastic</option>
            <option value='9'>9 Very Good</option>
            <option value='8'>8 Good</option>
            <option value='7'>7 Nice</option>
            <option value='6'>6 Above Average</option>
            <option value='5'>5 Average</option>
            <option value='4'>4 Below Average</option>
            <option value='3'>3 Poor</option>
            <option value='2'>2 Very Poor</option>
            <option value='1'>1 Worst</option>
          </select>
        </div>
        <div className='rating-submit'>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}

/*
10 Fantastic
9 Very Good
8 Good
7 Nice
6 Above Average
5 Average
4 Below Average
3 Poor
2 Very Poor
1 Worst
*/

export default Rating;
