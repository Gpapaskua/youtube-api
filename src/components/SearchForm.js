import { Axios } from '../api/api';
import React, { useCallback, useState } from 'react'

const SearchForm = ({ setData, setLoading }) => {

    const [search, setSearch] = useState("");

    const getSearchResults = useCallback(
        async () => {
           setLoading(true);
           try {
            const response = await Axios.get(`?part=snippet&maxResults=10&q=${search}&key=${process.env.REACT_APP_API_KEY}`);
            setData(response.data)
           } catch(err) {
            console.log(err)
           }    
           
           setLoading(false);
        },
        [search, setData, setLoading],
    )

    const handleSubmit = e => {
        e.preventDefault();
        getSearchResults();
        
    }

    return (
        <div className="w-75 min-vh-100 d-flex mx-auto align-items-center">
            <form onSubmit={handleSubmit} className="w-100">
                <div className="wrap">
                    <div className="search">
                        <input 
                            className="searchTerm" 
                            type="search" 
                            id="search"
                            value={search}
                            onChange={e => setSearch(e.target.value)} />

                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
