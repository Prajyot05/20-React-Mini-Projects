import React, { useEffect, useState } from 'react'
import Suggestions from './suggestions';
import "./autocomplete.css"

function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length > 1){
            const filteredData = users && users.length ?
            users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true)
        }
        else setShowDropdown(false);
    }

    async function fetchListOfUsers(){
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    function handleClick(event){
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    useEffect(() => {
        fetchListOfUsers()
    }, [])
  return (
    <div className='search-autocomplete-container'>
        {
            loading ? <div>Loading data...</div> :
            <input value={searchParam} onChange={handleChange} name='search-users' placeholder='Search Users here...' />
        }
        {
            showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
        }
    </div>
  )
}

export default SearchAutocomplete