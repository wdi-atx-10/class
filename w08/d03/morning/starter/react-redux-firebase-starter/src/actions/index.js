import * as types from '../constants/action_types';
import { database } from '../utils/firebase';



export const addUser = (user) => {
  console.log('You are adding user: ', user);

  return {
    type: types.ADD_USER,
    user
  }
};
