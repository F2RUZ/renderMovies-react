import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Search from "./Search";

export class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=man&apikey=3bf3e15 ")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.Search }));
  }

  serchMovie = (movieName) => {
    fetch("http://www.omdbapi.com/?s=${movieName}&apikey=3bf3e15 ")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.Search }));
  };

  render() {
    const { data } = this.state;

    console.log(data);
    return (
      <div className="dic">
        <Search serchMovie={this.serchMovie} />
        <div className="kattakard">
          {data.map((item) => (
            <MovieItem {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
