import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

const state = {
    timers: [
        {
            title: 'Practice squat',
            project: 'Gym Chores',
            id: uuidv4(),
            elapsed: 5456099,
            runningSince: Date.now(),
        }, {
            title: 'Bake squash',
            project: 'Kitchen Chores',
            id: uuidv4(),
            elapsed: 1273998,
            runningSince: null,
        },
    ],
};

const TimersDashboard = () => {

    return (
        <div className='ui three column centered grid'>
            <div className='column'>
                <EditableTimerList
                    timers={state.timers}
                />
                <ToggleableTimerForm
                    isOpen={true}
                />
            </div>
        </div>
    )
};

export default TimersDashboard;