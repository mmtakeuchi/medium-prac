import React from 'react'

const FetchButton = ({fetchNewActivity}) => {
    return (
        <button onClick={fetchNewActivity}>Generate Activity</button>
    )
}

export default FetchButton