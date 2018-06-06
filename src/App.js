import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Login from "./Components/login";
import queryString from "query-string";

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, isLoggedIn: false };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    this.setState({ isLoading: true });
    accessToken && this.setState({ isLoggedIn: true });

    if (accessToken) {
      // Get user
      const userPromise = fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(response => response.json())
        .then(data =>
          this.setState({
            user: {
              name: data.display_name,
              product: data.product,
              imageUrl: data.images[0].url
            }
          })
        );

      // Get Top Artists
      const topArtistsPromise = fetch(
        "https://api.spotify.com/v1/me/top/artists?limit=10",
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            artists: data.items
          })
        );

      // Get Top Tracks
      const topTracksPromise = fetch(
        "https://api.spotify.com/v1/me/top/tracks?limit=10",
        {
          headers: { Authorization: "Bearer " + accessToken }
        }
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            tracks: data.items
          });
          // Get Favourite Track
          fetch(data.items[0].href, {
            headers: { Authorization: "Bearer " + accessToken }
          })
            .then(response => response.json())
            .then(data =>
              this.setState({
                favouriteTrack: data
              })
            );
          // Get Favourite Track Audio Features
          fetch(
            "https://api.spotify.com/v1/audio-features/" + data.items[0].id,
            {
              headers: { Authorization: "Bearer " + accessToken }
            }
          )
            .then(response => response.json())
            .then(data =>
              this.setState({
                favouriteTrackFeatures: data
              })
            );
        });

      Promise.all([userPromise, topArtistsPromise, topTracksPromise]).then(
        () => {
          this.setState({
            isLoading: false
          });
        }
      );
    }
  }

  render() {
    // TODO: für später
    // let topTracksToRender =
    //   this.state.serverData.user && this.state.serverData.user.tracks
    //     ? this.state.serverData.user.tracks.filter(playlist =>
    //         playlist.name
    //           .toLowerCase()
    //           .includes(this.state.filterString.toLowerCase())
    //       )
    //     : [];

    if (!this.state.isLoggedIn) {
      return <Login initLogin={this.initLogin} />;
    }

    if (this.state.isLoading) {
      return <div>...Loading</div>;
    }

    if (!this.state.isLoading) {
      return (
        <div className="App">
          <Header />
          <Main
            user={this.state.user}
            tracks={this.state.tracks}
            artists={this.state.artists}
            favouriteTrack={this.state.favouriteTrack}
            favouriteTrackFeatures={this.state.favouriteTrackFeatures}
            initLogin={this.initLogin}
          />
        </div>
      );
    }
  }

  initLogin = () =>
    (window.location = window.location.href.includes("localhost")
      ? "http://localhost:8888/login"
      : "http://spotilyse-backend.herokuapp.com/login");
}

export default App;
