import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''         
        }
        //addReminder: this.addReminder.bind(this);
    
    }

    addReminder(){
       // console.log('this', this);
        this.props.addReminder(this.state.text);
    }

    deleteReminder(id){
        console.log('deleting in application', id);
        console.log('this.props', this.props);
    }

    renderReminders(){
        //const reminder = this.props.reminders
        const { reminders } = this.props
        //console.log('reminders', reminders)
        console.log(reminders)
        return (
            <ul  className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                return(
                        <li key={reminder.id} className="list-group-item">
                            <div className="list=item">{reminder.text} 
                            <div 
                            className="list-item delete-button"
                            onClick={ () => this.deleteReminder(reminder.id) }
                            > 
                                &#x2715;
                            </div>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        //console.log('this.props', this.props);
        return (
            <div className="App"> 
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control" 
                                placeholder="I have to..."
                                onChange={event => this.setState({text: event.target.value})}
                             />
                             
                        <button 
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}
                            >
                                Add Reminder
                        </button>      
                    </div>  
                </div>
                {this.renderReminders()}
            </div>
        )
    }
}

//function mapDispatchToProps(dispatch){
//    return bindActionCreators({addReminder}, dispatch)
//}

function mapStateToProps(state){
    //console.log('state', state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);