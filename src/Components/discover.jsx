import React, { Component } from "react";
import queryString from "query-string";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.getRelatedArtists = this.getRelatedArtists.bind(this);
    this.state = {
      selectedArtist: props.favouriteArtist,
      relatedArtists: null
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    this.setState({
      accessToken
    });

    if (!accessToken) return;

    this.getRelatedArtists(this.state.selectedArtist, accessToken);
  }

  getRelatedArtists(artist, accessToken) {
    this.setState({
      selectedArtist: artist
    });
    fetch(
      "https://api.spotify.com/v1/artists/" + artist.id + "/related-artists",
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

  render() {
    let artistsToRender = this.state.relatedArtists
      ? this.state.relatedArtists.artists.map((artist, i) => (
          <li className="Discover__item" key={i.toString()}>
            <a
              onClick={() => {
                this.getRelatedArtists(artist, this.state.accessToken);
              }}
            >
              <div className="Discover__item__container">{artist.name}</div>
            </a>
          </li>
        ))
      : "";
    let selectedArtist = this.state.selectedArtist
      ? this.state.selectedArtist.name
      : "";

    return (
      <div className="Discover">
        <h2 className="Discover__title">Discover your favourite Artists</h2>
        <p className="Discover__selected-artist">
          Selected Artist: {selectedArtist}
        </p>
        <ul className="Discover__list">{artistsToRender}</ul>
      </div>
    );
  }
}

export default Discover;
