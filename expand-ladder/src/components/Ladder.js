import React, {useState} from 'react'

const Ladder = ({ladder, num}) => {
    const [hovered, setHovered] = useState(0)
    
    const getSize = (id) => {
        return hovered >= id ? 150 : 80;
    };
    
    return (
        <img 
            src={ladder} 
            alt="ladder" 
            onMouseEnter={() => setHovered(num)}
            onMouseOut={() => setHovered(0)}
            height={getSize(num)}
            width={getSize(num)}/>
    )
}

export default Ladder;