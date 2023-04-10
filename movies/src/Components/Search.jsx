import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { searchMovies } = this.props;
    console.log(searchMovies);
    return (
      <div>
        <form className="box" action="">
          <input
            className="input"
            placeholder="Write movies name !!!"
            type="text"
          />
          <button class="glowing-btn">
            <span class="glowing-txt">
              C<span class="faulty-letter">L</span>ICK
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
