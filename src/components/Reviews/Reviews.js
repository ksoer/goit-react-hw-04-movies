import Axios from 'axios';
import React, { Component } from 'react';

class Reviews extends Component {
  state = {
    autors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5d8d0589fed8a27c05c2480c978a9bf4&language=en-US&page=1`,
    );
    this.setState({ autors: response.data.results });
  }
  render() {
    return (
      <ul>
        {this.state.autors.map(autor => (
          <li key={autor.id}>
            <p>{autor.content}</p>
            <p>{autor.autor}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default Reviews;