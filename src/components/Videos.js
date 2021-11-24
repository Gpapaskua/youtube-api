import React, { useEffect } from 'react'
import Video from './Video'

const Videos = ({ data }) => {

    useEffect(() => {
        document.body.classList.toggle('darkmode');
    }, [])

    return (
        <div className="container pt-5">
            <div className="row">
                {
                    data?.items.map((item, index) => {
                        return <Video key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Videos
