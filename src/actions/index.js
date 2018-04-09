import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
 //es5  text: text
        // es6 key:value = same then use es6
        text
    }
    console.log('action in addReminder', action)
    return action;
}

export const deleteReminder = (id) => {

    const action = {
        type: DELETE_REMINDER,
        // key: value = same payload: id
        id
    }

    console.log('deleting in actions', action);
    
    return action

}