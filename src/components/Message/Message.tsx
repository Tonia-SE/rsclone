import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/rootReducer';

export const Message: React.FC = () => {
  const message = useSelector((state: ApplicationState)  => state.message)

  if(message.isOn === true) {
    return (
      <div className={`alert alert-dismissible fade show`} id="order-message">
        <p className="message-text">
          {message.text}
        </p>
      </div>
    )
  } else {
    return (
      <div className={`alert alert-dismissible fade none`} id="order-message">
          <p className="message-text">
            {message.text}
          </p>
        </div>  
    )
  }
}