import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
// import NotFoundPage from './views/NotFoundPage';
import MovieDetailPage from './MovieDetailsPage/MovieDetailsPage';
import styles from './Search/search.module.css';
import routes from '../routes';

const App = () => (
  <>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink to={routes.movies}>Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailPage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;