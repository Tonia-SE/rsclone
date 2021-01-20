import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/rootReducer';
//import { useTabIndex } from 'react-tabindex';

// const tabIndex:number = 0;
//import { useTabIndex } from 'react-tabindex';

export const Message: React.FC = () => {
  const message = useSelector((state: ApplicationState)  => state.message)

  if(message.isOn === true) {
    return (
      // <span className="d-inline-block" tabIndex={tabIndex} data-toggle="tooltip" title="Disabled tooltip">
      //   <button className="btn btn-primary"  type="button" disabled>Кнопка отключения</button>
      // </span>
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
    
    