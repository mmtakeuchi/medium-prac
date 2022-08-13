import { useState } from "react";
import Input from './components/Input'
import RobotList from './components/RobotList'
import './App.css'

function App() {
    const [robots, setRobots] = useState([]);
    
    const handleSetRobots = (input) => {
        setRobots(prev => [...prev, `https://robohash.org/${input}`])
    }
    
    const filterRobots = (selectedRobot) => {
        setRobots(prev => robots.filter(robot => robot !== selectedRobot))
    }
    
    return (
        <div className="App">
            <Input handleSetRobots={handleSetRobots}/>
            <RobotList robots={robots} filterRobots={filterRobots}/>
        </div>
    );
}

export default App;
