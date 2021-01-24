import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/rootReducer';

interface IProps{
  className: string
}

export const Message: React.FC<IProps> = (props) => {
  const message = useSelector((state: ApplicationState) => state.message)

  if(message.isOn === true) {
    return (
      <div className={`alert alert-dismissible fade ${props.className} show`} id="order-message">
        <p className="message-text">
          {message.text}
        </p>
      </div>
    )
  } else {
    return (
      <div className={`alert alert-dismissible fade ${props.className} none`} id="order-message">
        <p className="message-text">
          {message.text}
        </p>
      </div>  
    )
  }
}