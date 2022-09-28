import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css';

// importando chave e url da api
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  }
  
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return ( 
    <div className='container'>
      <h2 className="title">The best movies:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {
          topMovies.length > 0 && topMovies
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
   );
}
 
export default Home;