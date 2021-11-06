import React from 'react';
import TimerForm from './TimerForm';

const ToggleableTimerForm = (props) => {

    if (props.isOpen) {
        return (
            <TimerForm /> // No props. User will fill in the empty title, project fields.
        );
    } else {
        return (
            <div className='ui basic content center aligned segment'>
                <button className='ui basic button icon'>
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
};

export default ToggleableTimerForm;