import React from 'react'

const Video = ({ item }) => {

    
    return (
        <div className="col-xs-12 col-sm-4 d-flex flex-strech mb-5 video">
            <div className="detail">
                <a 
                    rel="external"
                    href={`https://www.youtube.com/watch?v=${item.id.videoId || ""}`} 
                    target='_new'
                    className="btn btn-info">Go to video</a>
            </div>
            <div className="card border-1">
                <img src={item.snippet.thumbnails.high.url} alt="thumbnail" className="rounded" />

                <div className="card-content px-3 pt-2">
                    <h4 className="card-title">
                    {item.snippet.title}
                    </h4>
                    <p>
                        {item.snippet.description}
                    </p>
                </div>
            </div>
        </div>
    )
        
}

export default Video
