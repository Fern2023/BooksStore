import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Search = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [visibleResults, setVisibleResults] = useState(5);
    const [expanded, setExpanded] = useState(false);


    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(
                `http://localhost:4000/books/search?book=${search}`,

            );
            setSearchResults(response.data); setLoading(false); setVisibleResults(5);
        };

        fetchData();
    }, [search]);


    return (
        <div>

            <form onSubmit={handleSubmit} className='flex flex-row items-center space-x-2'            >
                <input type='text' value={search} onChange={handleInputChange} placeholder='Search...'
                    className='flex-grow px-3 py-2 rounded-md focus:outline-none focus:border-cbb26a mb-2 sm' />
                <button type='submit' className='bg-black px-2 py-2 mb-2 rounded-md hover:bg-opacity-80 focus:outline-none scale-125 '>Search</button>
            </form>
        </div>
    )
}

export default Search