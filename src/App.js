import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import queryString from "query-string";

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, isLoggedIn: false, notEnoughData: false };
    this.getRelatedArtists = this.getRelatedArtists.bind(this);
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    this.accessToken = parsed.access_token;
    this.setState({ isLoading: true });
    this.accessToken && this.setState({ isLoggedIn: true });

    if (!this.accessToken) return;
    // Get user
    const userPromise = fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + this.accessToken }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.images[0]) {
          this.setState({
            notEnoughData: true
          });
          return;
        }
        this.setState({
          user: {
            name: data.display_name,
            product: data.product,
            imageUrl: data.images[0].url
          }
        });
      });

    // Get Top Artists
    const topArtistsPromise = fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=10",
      {
        headers: { Authorization: "Bearer " + this.accessToken }
      }
    )
      .then(response => response.json())
      .then(data => {
        if (!data.items[0]) {
          this.setState({
            notEnoughData: true
          });
          return;
        }
        this.setState({
          artists: data.items,
          selectedArtist: data.items[0]
        });
        fetch(
          "https://api.spotify.com/v1/artists/" +
            data.items[0].id +
            "/related-artists",
          {
            headers: { Authorization: "Bearer " + this.accessToken }
          }
        )
          .then(response => response.json())
          .then(data =>
            this.setState({
              relatedArtists: data
            })
          );
      });

    // Get Top Tracks
    const topTracksPromise = fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=10",
      {
        headers: { Authorization: "Bearer " + this.accessToken }
      }
    )
      .then(response => response.json())
      .then(data => {
        if (!data.items[0]) {
          this.setState({
            notEnoughData: true
          });
          return;
        }

        this.setState({
          tracks: data.items
        });
        // Get Favourite Track
        fetch(data.items[0].href, {
          headers: { Authorization: "Bearer " + this.accessToken }
        })
          .then(response => response.json())
          .then(data =>
            this.setState({
              favouriteTrack: data
            })
          );
        // Get Favourite Track Audio Features
        fetch("https://api.spotify.com/v1/audio-features/" + data.items[0].id, {
          headers: { Authorization: "Bearer " + this.accessToken }
        })
          .then(response => response.json())
          .then(data =>
            this.setState({
              favouriteTrackFeatures: data
            })
          );
      });

    Promise.all([userPromise, topArtistsPromise, topTracksPromise]).then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="App">
          <Header />
          <Login initLogin={this.initLogin} />
        </div>
      );
    }

    if (this.state.isLoading) {
      return (
        <div className="App">
          <Header />
          <div className="Spinner">...Loading</div>
        </div>
      );
    }

    if (this.state.notEnoughData) {
      return (
        <div className="App">
          <Header />
          <div className="Error">
            <h2 className="Error__Headline">No data = no fun for you</h2>
            <p className="Error__Description">
              You need to listen to more music!
              <br /> (Or maybe add a profile image)
            </p>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <div className="App">
          <Header />
          <Dashboard
            user={this.state.user}
            tracks={this.state.tracks}
            artists={this.state.artists}
            favouriteTrack={this.state.favouriteTrack}
            favouriteTrackFeatures={this.state.favouriteTrackFeatures}
            selectedArtist={this.state.selectedArtist}
            relatedArtists={this.state.relatedArtists}
            getRelatedArtists={this.getRelatedArtists}
          />
        </div>
      );
    }
  }

  initLogin = () =>
    (window.location = window.location.href.includes("localhost")
      ? "http://localhost:8888/login"
      : "http://spotilyse-backend.herokuapp.com/login");

  getRelatedArtists(artist) {
    fetch(
      "https://api.spotify.com/v1/artists/" + artist.id + "/related-artists",
      {
        headers: { Authorization: "Bearer " + this.accessToken }
      }
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          relatedArtists: data,
          selectedArtist: artist
        })
      );
  }
}

export default App;
