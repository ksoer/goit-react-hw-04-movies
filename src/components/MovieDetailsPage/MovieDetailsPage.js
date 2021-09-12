import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

class MovieDetailPage extends Component {
  state = {
    overview: null,
    title: null,
    original_name: null,
    poster_path: null,
    genres: [],
    vote_average: '',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US`,
    );
    const {
      poster_path,
      original_name,
      title,
      overview,
      vote_average,
      genres,
    } = response.data;
    this.setState({
      poster_path,
      title: title ? original_name : title,
      overview,
      vote_average,
      genres,
      from: this.props.location.state ? this.props.location.state.from : '',
      query: this.props.location.state ? this.props.location.state.query : '',
    });
  }
  handleClick = () => {
    this.props.history.push({
      pathname: this.state.from,
      query: this.state.query,
      search: `?query=${this.state.query}`,
    });
  };

  render() {
    const {
      poster_path,
      original_name,
      title,
      overview,
      vote_average,
      genres,
    } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleClick}>
          Go back
        </button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title || original_name}
          />
          <div>
            <h2>{title || original_name}</h2>
            <p>User score:{vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview || 'This movie has no overview yet'}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${this.props.match.params.movieId}/cast`}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`/movies/${this.props.match.params.movieId}/reviews`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}
export default MovieDetailPage;