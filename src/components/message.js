// component that allows us to pass "system" message to the state for display. the message will disappear after four seconds

import React from 'react';
// access the global state bring in the consumer
import { Consumer } from './context';
// we need the action values
import * as ActionTypes from './actions';

const AppMessage = () => {
  return (
    // wrap it all inside the consumer
    <Consumer>
      {/* get the value */}
      {value => {
        // we want the message to disappear after a set time so set it up outside the return
        setTimeout(() => {
          let newMsg = { message: '', collection: '', isShowing: false };
          value.dispatcher({
            type: ActionTypes.APPLICATION_MESSAGE,
            payload: newMsg
          });
        }, 4000);
        // remember to inculde another return statement Headers...this is what is actually sent back byt the component for display
        return (
          <div>
            {/* data values from the global state...we did not use destructuring */}
            <h2>{value.appMessage.message}</h2>
            <h3>{value.appMessage.collection}</h3>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AppMessage;
