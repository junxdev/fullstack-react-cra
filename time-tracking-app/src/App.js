import './App.css';
import 'semantic-ui-css/semantic.min.css'

import TimersDashboard from './components/TimersDashboard';

function App() {
  return (
    <div className="App">
      <div id="main" class="main ui">
        <h1 class="ui dividing centered header">Timers</h1>
        <TimersDashboard />
      </div>
    </div>
  );
}

export default App;
