import React, { Component } from "react";
import queryString from "query-string";

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    };
  }

  componentDidMount() {
    let favouriteArtist = this.props.favouriteArtist || null;
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    let selectedArtistId = favouriteArtist && favouriteArtist.id;

    if (accessToken && selectedArtistId) {
      fetch(
        "https://api.spotify.com/v1/artists/" +
          selectedArtistId +
          "/related-artists",
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            relatedArtists: data
          })
        );
    }
  }
  render() {
    let artistsToRender = this.state.relatedArtists
      ? this.state.relatedArtists.map((artist, i) => (
          <li key={i.toString()}>{artist.name}</li>
        ))
      : "";
    let favouriteArtistName = this.props.favouriteArtist
      ? this.props.favouriteArtist.name
      : "";

    return (
      <div>
        <h2>Discover your favourite Artists</h2>
        <p>Favourite Artist: {favouriteArtistName}</p>
        <ul>{artistsToRender}</ul>
      </div>
    );
  }
}

export default Discover;
