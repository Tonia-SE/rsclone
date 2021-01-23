import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'  
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/rootReducer';

interface IProps {
  show: boolean,
  onHide: () => void
}

export const OrderDailog: React.FC<IProps> = (props) => {
  const date = (new Date().getMonth() < 9)? `${new Date().getDate()}.0${new Date().getMonth() + 1}.${new Date().getFullYear()}`: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
  const id = Date.now().toString();
  console.log(date);
  //const categories = useSelector((state: ApplicationState) => state.s);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Спасибо за покупку!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Заказ № {id}</h4>
        <p>
          oт {date} на сумму 555₽ успешно оформлен. Наш сотрудник свяжется с вами в течение получаса для уточнения деталей заказа.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="okBtn">ОК</Button>
      </Modal.Footer>
    </Modal>
  );
}