import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = (props) => {

    const timers = props.timers.map(timer => <EditableTimer {...timer} />);

    return (
        <div id='timers'>
            {timers}
            {/* <EditableTimer
                title='Lear React'
                project='Web Domination'
                elapsed='8986300'
                runningSince={null}
                editFormOpen={false}
            />
            <EditableTimer
                title='Learn extreme ironing'
                project='World Domination'
                elapsed='3890985'
                runningSince={null}
                editFormOpen={true}
            /> */}
        </div>
    )
};

export default EditableTimerList;