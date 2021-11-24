import React, { useState } from 'react'
import Loading from './Loading';
import SearchForm from './SearchForm'
import Videos from './Videos';

const Home = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    if(loading) {
        return <Loading />
    }

    return (
        <div className="container-fluid">
            
            {
                !data &&  <SearchForm setData={setData} setLoading={setLoading} loading={loading} />
            }
            {
                data && <Videos data={data} />
            }
        </div>
    )
}

export default Home
