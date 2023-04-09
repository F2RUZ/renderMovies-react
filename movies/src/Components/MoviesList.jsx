import React, { Component } from "react";
import MovieItem from "./MovieItem";

export class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=panda&apikey=3bf3e15 ")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.Search }));
  }

  render() {
    const { data } = this.state;

    console.log(data);
    return (
      <div className="kattakard">
        {data.map((item) => (
          <MovieItem {...item} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
