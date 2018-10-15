import React, { Component } from 'react';

// in order to use the context api you must import the provider into the main point of your application. This will give your entire application access to the global state.

// If you want to access the global state you must import the consumer...this is the gateway to the state
import { Provider, Consumer } from './components/context';

import TestComp from './components/testComp';
import AppMessage from './components/message';

class App extends Component {
  render() {
    return (
      // wrap the entire content of your return statement inside the provider tag so the entire application can access the global state
      <Provider>
        {/* because we want to access the global state inside this compoent we must import it as well */}
        <Consumer>
          {/* the consumer returns an object */}
          {value => {
            // value can be anything you want...its just a variable name
            return (
              <div className="App">
                {/* to access an item in the state */}
                {/* is the value of isShowing true? if so show the AppMessage component, otherwise show nothing or null */}
                {value.appMessage.isShowing ? <AppMessage /> : null}
                <hr />
                <TestComp />
                <hr />
                <h3>App Component</h3>
              </div>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
