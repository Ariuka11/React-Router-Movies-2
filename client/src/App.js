import React, { useState } from 'react';
import {Route, NavLink} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <NavLink to ='/'>Home</NavLink>
      <NavLink to ='/movies'>Movies</NavLink>
      <Route exact path = '/' render = { props => <SavedList {...props} list={savedList} />} />
      <Route exact path = '/movies' render = { props => <MovieList {...props} />} />
      <Route path = '/movies/:id' render = { props => <Movie {...props} />} />
    </div>
  );
};

export default App;
