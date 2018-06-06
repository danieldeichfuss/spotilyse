import React, { Component } from "react";
import queryString from "query-string";

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };

    this.getRelatedArtists = this.getRelatedArtists.bind();
  }

  componentDidMount() {
    let favouriteArtist = this.props.favouriteArtist || null;
    let parsed = queryString.parse(window.location.search);
    this.setState = { accessToken: parsed.access_token };
    this.getRelatedArtists(favouriteArtist);
  }

  getRelatedArtists(artist) {
    fetch(
      "https://api.spotify.com/v1/artists/" + artist.id + "/related-artists",
      {
        headers: { Authorization: "Bearer " + this.state.accessToken }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          relatedArtists: data
        });
      });
  }

  render() {
    let artistsToRender = this.state.relatedArtists
      ? this.state.relatedArtists.artists.map((artist, i) => (
          <li key={i.toString()}>
            <a
              onClick={() => {
                this.getRelatedArtists(artist);
              }}
            >
              {artist.name}
            </a>
          </li>
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
