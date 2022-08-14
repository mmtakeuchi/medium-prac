import React, {useState} from 'react'
import FetchButton from './components/FetchButton'
import Activity from './components/Activity'
import './App.css';

function App() {
    const [activities, setActivities] = useState([])
    
    const fetchNewActivity = async () => {
        console.log('hello')
        const newActivty = await fetch('https://www.boredapi.com/api/activity').then(resp => resp)
        console.log(newActivty)
        setActivities(prev => [...prev, newActivty])
    }
    
    const renderActivities = activities.map(activity => <Activity key={activity.key} activity={activity}/>)

  return (
    <div className="App">
      <FetchButton fetchNewActivity={fetchNewActivity}/>
      <ul>{renderActivities}</ul>
    </div>
  );
}

export default App;
