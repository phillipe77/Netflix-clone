import React from 'react';
import './fm.css';
import {Switch, Route, Link} from 'react-router-dom';




export default ({item})=> {

    return(
        <section className="fm" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(http://image.tmdb.org./t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg)`
            
        }}>
              <div className="vertical--fade" >
                  <div className="horizontal--fade" >
                  <div className="title">Peaky Blinders</div>
                  <div className="info">
                     <div className="score"> 9.8 pontos</div>
                        <div className="seasons">6 temporadas</div>
                        <div className='ano'> 2022</div>
                      </div>
                      <div className='description'>Em 1919, um infame gangue de Birmingham é liderado pelo cruel Tommy Shelby, um patrão do crime determinado a conquistar o mundo a qualquer preço.

</div>
                      <div className='buttons'>
                            <a href='page1' className="playBtn">► Assistir</a> 
                        <a href={`/list/add/${item.id}`} className="addBtn">+ Informações</a>
                    </div>
                      <div className='genres'> <strong>Gênero:</strong> Drama 

                      </div>
                  </div>
                  
              </div>
                    
     </section>
    );
}           
