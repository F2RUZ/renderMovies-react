import React, { Component } from "react";

export class MovieItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div className="cross">
        <img src={Poster} className="img" />
        <div className="card">
          <h2>{Title}</h2>
          <div>
            <span>{imdbID}</span>
            <span>{Year}</span>
            <p className="tip">{Type}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
