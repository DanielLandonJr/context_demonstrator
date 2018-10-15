// here is where we are getting our data with async/await using jsonplacehoder site

// context api does not care where the data comes from so we seperate it here...this is where we get the data so its seperate for maintainability(?)

import axios from 'axios';
import * as ActionTypes from './actions';

export async function ReadContacts(state) {
  // we are using async/await for api call
  // using try/catch s we can catch any errors
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    state.dispatcher({
      type: ActionTypes.READ_CONTACTS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
}
