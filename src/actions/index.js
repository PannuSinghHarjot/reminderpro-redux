import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
 //es5  text: text
        // es6 key:value = same then use es6
        text,
        dueDate
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

export const clearReminders = () => {
    
    return {
        type: CLEAR_REMINDERS
    }


}
    
    