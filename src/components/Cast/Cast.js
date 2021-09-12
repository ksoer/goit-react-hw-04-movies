 
import Axios from 'axios';
import React, { Component } from 'react';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5d8d0589fed8a27c05c2480c978a9bf4`,
    );
    this.setState({ cast: response.data.cast });
  }
  render() {
    return (
      <ul>
        {this.state.cast.map(elem => (
          <li key={elem.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${elem.profile_path}`}
              alt=""
            />
            <p>{elem.name}</p>
            <p>{elem.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Cast;