import React, { Component } from "react";
import queryString from "query-string";
import Graph from "./Graph";

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
    return (
      <div className="Discover">
        <h2 className="Discover__title">Discover your favourite Artists</h2>
        {!!this.state.relatedArtists && (
          <Graph
            relatedArtists={this.state.relatedArtists.artists}
            getRelatedArtists={this.getRelatedArtists}
            accessToken={this.state.accessToken}
            selectedArtist={this.state.selectedArtist.name}
          />
        )}
      </div>
    );
  }
}

export default Discover;
