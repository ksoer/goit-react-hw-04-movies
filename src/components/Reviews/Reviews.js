import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchReviewsMovie } from '../../Services/Api';
import style from './Reviews.module.css';
/* eslint react/prop-types: 1 */

class Reviews extends Component {
  static propTypes = { match: PropTypes.object };
  state = {
    review: [],
  };
  async componentDidMount() {
    const propId = await this.props.match.params.movieId;
    const response = await fetchReviewsMovie(propId);
    this.setState({ review: response.data.results });
  }
  render() {
    const { review } = this.state;
    return (
      <>
        <h2>Reviews</h2>
        {review.length === 0 ? (
          <p className={style.content}>
            'We don't have any reviews for this movie'
          </p>
        ) : (
          <ul className={style.list}>
            {review.map(rew => (
              <li key={rew.id}>
                <p className={style.name}>{rew.author}</p>
                <p className={style.content}>{rew.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;