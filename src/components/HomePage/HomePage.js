import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5d8d0589fed8a27c05c2480c978a9bf4&',
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h1>Tranding today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location.pathname },
                }}
              >
                {movie.title || movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;