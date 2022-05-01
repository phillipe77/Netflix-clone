import React from 'react';
import './MV.css';


export default ({title, items}) => {
    return (
        <div className='MV'>
            <h2>{title}</h2>
            <div className="MV--listarea">
                <div className="MV--list">
                    {items.results.length > 0 && items.results.map((item, key) =>(
                        <div key={key} className="MV--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                         </div>
                      ))}
                 </div>
            </div>
         </div>
    );
        
}


