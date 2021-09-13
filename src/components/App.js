import { Component, lazy, Suspense } from 'react';
import { Redirect, Route,  Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
// import HomePage from './HomePage/HomePage';
// import MoviesPage from './MoviesPage/MoviesPage';
// import NotFoundPage from './views/NotFoundPage';
// import MovieDetailPage from './MovieDetailsPage/MovieDetailsPage';
// import styles from './Search/search.module.css';
import routes from '../routes';

const LazyHomePage = lazy(() =>
  import('./HomePage/HomePage' ),
);
const LazyMoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' ),
);
const LazyMovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' 
  ),
);

class App extends Component  {
  render(){
    return(
  <>
    <Navigation />
    <Suspense fallback={<h2>Loading...</h2>}>
    <Switch>
      <Route exact path={routes.home} component={LazyHomePage} />
      <Route path={routes.movieDetails} component={LazyMovieDetailsPage} />
      <Route exact path={routes.movies} component={LazyMoviesPage} />
      {/* <Route component={HomePage} /> */}
      <Redirect to={routes.home} />
    </Switch>
    </Suspense>
  </>
);
  }
}

export default App;