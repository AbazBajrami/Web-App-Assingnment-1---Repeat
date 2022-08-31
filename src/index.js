import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import dislikedMoviesPage from "./pages/dislikedMoviesPage"; // import disliked movies page
import PopularMoviesPage from "./pages/popularMoviesPage"; // import popular movies page
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; // import top rated movies page
import NowPlayingMoviesPage from "./pages/nowPlayingPage"; // import now playing movies page
import SignUpPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import AuthHeader from "./components/authHeader/authHeader";
import PrivateRoute from "./privateRoute";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
        <SiteHeader />
        <AuthHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
          <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute exact path="/movies/popularMovies" component={PopularMoviesPage} />
        <PrivateRoute exact path="/movies/topMovies" component={TopRatedMoviesPage} />
        <PrivateRoute exact path="/movies/nowPlayMovie" component={NowPlayingMoviesPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute exact path="/movies/disliked" component={dislikedMoviesPage} />



        <PrivateRoute path="/movies/:id" component={MoviePage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));