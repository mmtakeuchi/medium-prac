import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FetchButton from './components/FetchButton'
import Activity from './components/Activity'
import './App.css';

function App() {
    const [activities, setActivities] = useState([])

     const generateActivity = () => {
        const getActivity = async () => {
        const activity = await axios.get("https://www.boredapi.com/api/activity");
        setActivities([...activities, activity.data]);
    };
    getActivity();
  };

    const renderActivities = activities.map(activity => <Activity key={activity.key} activity={activity}/>)

    useEffect(generateActivity, []);

  return (
    <div className="App">
      <FetchButton fetchNewActivity={generateActivity}/>
      <ul>{renderActivities}</ul>
    </div>
  );
}

export default App;
