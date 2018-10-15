// this is where the magic happens
import React, { Component } from 'react';
// bring in the reducer
import Reducer from './reducer';
// bring in the data
import * as LoadData from './loadData';

// create a context so we can access the context api from react
const Context = React.createContext();

// this is the Provider (the tag used in the applicationCache.js file). the provider makes the state available to the application
export class Provider extends Component {
  // here is the state that we are going to pass around
  state = {
    // simple object
    appMessage: {
      message: 'Default Message',
      collection: 'Default Collection',
      // isShowing is used to determine if the system message is visible
      isShowing: false
    },
    myName: 'Arthur',
    myEmail: 'arthur.dent@gmail.com',
    // this is the array we will put the contacts information in
    contacts: [],
    // this is a function that can be access by using the state. Currently the dispatcher takes a type (found in the actions.js file) and a payload (the data we are wanting to change...its an object so it can contain anything). once the dispatcher is called it passes the current value of state as well as the action to the reducer. because we are using this.setState any changes the reducer handles will change the state. Please refer to some of the other project files for examples of what you can pass around as part of the payload
    dispatcher: action => {
      this.setState(state => Reducer(state, action));
    }
  };

  // this is a function that belongs to eht react lifecycle. This is called once the component mounts...a nice place to start loading your data.
  async componentDidMount() {
    // for this example we are only getting one api call so we have one function call to make
    LoadData.ReadContacts(this.state);
  }

  render() {
    return (
      // in order to make the provider available to other components it must me part of the return

      // The value returned below is the actual data that you are making availabe to the entire application. You can send a single item from this.state.dispatcher..any value you want or even the entire state .

      // value="This is the value that the application will get"
      // value={this.state.contacts} lets only make the contacts array available
      <Context.Provider value={this.state}>
        {/* inside the provider we makes the children of props available...this is everything in the "value" tag above as well as a render component...this is a simplistic explanation */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export the consumer...this is the gateway to accessing the data provided by the provider
export const Consumer = Context.Consumer;
