import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import style from './SearchForm.module.css';

/* eslint react/prop-types: 1 */

class SearchForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = {
    query: '',
  };

  // notify = () =>
  //   toast.info('поле не должно быть пустым', {
  //     position: 'top-center',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    // console.log(e.target.elements.search.value);
    query.trim() ? this.props.onSubmitForm(query) : this.notify();

    this.resetState();
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
    //  console.log(this.state.query);
  };

  resetState = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header >
        <form onSubmit={this.handleSubmit} >
          <button type="submit" >
            <span >Search</span>
          </button>

          <input
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;