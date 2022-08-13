import React, {useState} from 'react'

const RobotList = ({robots, filterRobots}) => {
    const renderRobots = robots.map((robot,i) => {
        return <li onClick={e => filterRobots(robot)}><img className="robot-img" src={robot} key={i}/></li>
    })
    
  return (
    <ul className="robot-list">{renderRobots}</ul>
  )
};

export default RobotList