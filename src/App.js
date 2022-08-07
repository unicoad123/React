import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
   const [movies,setMovies]=useState([]);
   const [isLoading,setIsLoading]=useState(false);
   const [error,setError]=useState(null);
   
    const fetchMoviesHandler= useCallback(async ()=>
   {
    setIsLoading(true);
    setError(null);
    try{
    const response=await fetch('https://react-http-f7dbb-default-rtdb.firebaseio.com/movies.json')
    if(!response.ok)
    {
      throw new Error('Something went wrong...Retrying');
      
    }
    const data=await response.json();
    const transformedMovies=data.results.map(movieData=>{
        return{
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseData:movieData.release_date
        }
      });
      setMovies(transformedMovies);
    }catch(error)
    { 
      setError(error.message);
    }
      setIsLoading(false);
    })
   useEffect(()=>{
    fetchMoviesHandler();
   },[fetchMoviesHandler])
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 &&<MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>Found no movies</p>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
