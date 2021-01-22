import React, { useState } from 'react';
import { backendServer } from '../../consts';
import { Modal, Form, Button } from 'react-bootstrap'  
import { Message } from '../Message/Message';

interface IProps{
  show: boolean;
  onHide: () => void
}

export const LogInModal: React.FC<IProps> = (props) => {

  return (
<Modal
show={props.show}
onHide={props.onHide}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={()=>{}} />
      <Form.Text as='small'> aaaaaaaaaa </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={()=>{}} />
    </Form.Group>
    <Message />
  </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>    
    <Button variant="primary" type="submit" onClick={()=>{}}>
      Submit
    </Button>
  </Modal.Footer>
</Modal>
)}