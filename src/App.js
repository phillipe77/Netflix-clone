
import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MV from './components/MV';
import './App.css';
import Fm from './components/fm';
import fm from './components/fm.css';
import Header from './components/Header';
import {Switch, Route, Link} from 'react-router-dom';







export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    const [blackHeader, setblackHeader] = useState(false);
    

  useEffect(() => {
    const loadAll = async() => {
      //Pegando a lista de filmes do categoria
      let list = await tmdb.getHomelist(); //Carrega e lista os filmes de cada categoria selecionada
      setMovieList(list);
      let originals  = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals [0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo= await tmdb.getMovieInfo(chosen.id,'tv');

      setFeatureData(chosenInfo);


      

      }
      loadAll();
  },[]); 

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 15){
          setblackHeader(true);
      } else {
        setblackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);
    return () =>{
      window.removeEventListener('scroll',scrollListener);
    }
    
  },[]);

return (
  <div className="page" >
    <Header black={blackHeader}/>
     {featureData &&
      <Fm  item={featureData} />
     }
    <section className="lists" >
      {movieList.map((item, key)=>(
       <MV key={key} title= {item.title} items={item.items}/>
      ))}
    </section>
    <footer>
      Desenvolvido por Phillipe Linhares<br/>
      GitHub: https://github.com/phillipe77
      Direito de imagem para Netflix<br/>
      Dados dos filmes retirados do TMDB: https://www.themoviedb.org/
    </footer>
    
    {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading"/>
  </div>
    }
  </div>
  );
}


