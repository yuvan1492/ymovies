import React from 'react'
import { useEffect,useState } from 'react';
import './App.css';
import Card from './Card';
import searchIcon from './searchIcon.svg';

const API_URL = 'http://www.omdbapi.com?apikey=d8bbb368';

const App = () => {
    const [Movies,setMovies] = useState([]);

    const [searchTerm,setsearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('batman');
    }, []);


  return (
    <div className='app'>
        <h1>YMovies?</h1>

        <div className='search'>
            <input placeholder='Search a Movie u like' value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)}/>
            <img src={searchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
        </div>
        

        {
            Movies?.length > 0 ? (<div className='container'>
            {Movies.map((movie0)=> (<Card movie={movie0}/>))}
        </div>) : (
            <div className='empty'>
                <h2>No movies found</h2>
            </div>
        )
        }

        
    </div>
  );
}

export default App