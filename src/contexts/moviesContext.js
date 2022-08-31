import React, { useState, useEffect, createContext, useReducer } from "react";
export const MoviesContext = createContext(null);

const MoviesContextProvider = (props) =>

{
    const [myReviews, setMyReviews] = useState( {} )
    //add dislike
    const [dislikedMovies, setDislike] = useState( [] )

    const addToDisliked = (movie) => {
      let newDislikedMovie = [];
      if(!dislikedMovies.includes(movie.id)){
        newDislikedMovie = [...dislikedMovies, movie.id];
      }
      setDislike(newDislikedMovie)
    };


    //Favs
    const [favorites, setFavorites] = useState( [] )
    const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

    //remove
    const removeFromDislikedMovies = (movie) => {
      setDislike(dislikedMovies.filter(
        (mId) => mId !== movie.id
      ))
    };

   // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        dislikedMovies,
        addToDisliked,
        removeFromDislikedMovies,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;