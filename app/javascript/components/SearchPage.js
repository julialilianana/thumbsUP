import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [movieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState();

  const fetchData = async () => {
    let apiKey = process.env.REACT_APP_TMDB_KEY
    console.log(apiKey)
    let searchString = SearchBar 
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&query=${searchString}`)
      .then(response => response.json())
      .then(data => {
         setMovieList(data) 
         setMovieListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = movieListDefault.filter(movie => {
      return movie.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMovieList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Movie List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <MovieList movieList={movieList}/>
    </>
   );
}

export default SearchPage