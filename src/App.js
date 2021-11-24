import React, { useState } from 'react'


/** Components */
import Loading from './components/Loading';
import SearchForm from './components/SearchForm'
import Videos from './components/Videos';

const App = () => {
    
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

export default App
