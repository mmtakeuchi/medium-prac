import React, {useState} from 'react'

const Input = ({handleSetRobots}) => {
    const [search, setSearch] = useState("")
    
    const handleInput = (e) => {
        setSearch(e.target.value)
    }
    
    const handleSearch = (e) => {
        e.preventDefault()
        handleSetRobots(search)
        setSearch("")
    }
    
    return (
        <form onSubmit={handleSearch}>
            <input type="text" onChange={handleInput} value={search}/>
        </form>
    )
}

export default Input