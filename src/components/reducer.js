// the reducer is what we use to make the changes to the state itself...we use the spread operator so make your self familiar with it

// we import the actions file so we can access its vaules

import * as ActionTypes from './actions';

const Reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.APPLICATION_MESSAGE:
      return {
        ...state,
        appMessage: action.payload
      };
    case ActionTypes.UPDATE_NAME:
      return {
        ...state,
        myName: action.payload
      };
    case ActionTypes.READ_CONTACTS:
      // console.log(action.payload);
      // break;
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
