import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/policy.scss';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from 'reactstrap';

function PolicyCard(props) {
  const navigate = useNavigate();
  function handleClick() {
    console.log('im in policycards ==== ', props.isLoggedIn);
    if (props.isLoggedIn) {
      props.handleClick();
    } else {
      navigate('/login');
    }
  }

  const styles = {
    backgroundColor: props.isSelected ? '#59E391' : 'grey',
  };

  return (
    <div>
      <Card className='policy-card'>
        <CardBody>
          <CardTitle tag='h5'>{props.name}</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            {props.type}
          </CardSubtitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            Term : {props.term}
          </CardSubtitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            Coverage : {props.coverage}
          </CardSubtitle>
          <CardText>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </CardText>
          <Button onClick={handleClick} style={styles}>
            {props.isSelected ? 'Selected' : 'Select'}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default PolicyCard;
