// simple test component to demonstrate using state

import React, { Component } from 'react';
// bring in the actions
import * as ActionTypes from './actions';
// we want to access the global state so bring in the consumer
import { Consumer } from './context';

export default class TestComp extends Component {
  render() {
    return (
      // wrap everything inside the consumer
      <Consumer>
        {/* its a function with an arrow function inside..the varialbe value can be anything */}
        {value => {
          // we want to access parts of the global state. to get away from useing variableName.stateItem we are using destructureing to pull the parts we want from the state
          const { myName, myEmail, contacts, dispatcher } = value;

          return (
            <div>
              <button
                onClick={() => {
                  // dispatcher is a funtion inside the state..see context.js file for description
                  // this call to dispatcher updates the myName value
                  dispatcher({
                    type: ActionTypes.UPDATE_NAME,
                    payload: 'Arthur Dent'
                  });
                  let newMsg = {
                    // change this value to change the message value that is displayed
                    message: 'myName State has been updated!',
                    collection: '',
                    isShowing: true
                  };
                  // this dispatcher updates the import('./message').AppMessage...sets the isShowing to true to show the message
                  dispatcher({
                    type: ActionTypes.APPLICATION_MESSAGE,
                    payload: newMsg
                  });
                }}
              >
                Message
              </button>
              <p>
                <strong>{myName}</strong>: ... {myEmail}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {/* below will loop through the contacts and output the data */}
                {contacts.map(contact => (
                  <li>
                    ID: {contact.id}, NAME: {contact.name}, EMAIL:{' '}
                    {contact.email}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
