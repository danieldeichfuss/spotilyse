import React, { Component } from "react";
import "./App.css";
import queryString from "query-string";

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    };
  }
  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (accessToken) {
      fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + accessToken }
      })
        .then(response => response.json())
        .then(data =>
          this.setState({
            serverData: {
              user: {
                name: data.display_name,
                product: data.product,
                imageUrl: data.images[0].url
              }
            }
          })
        );
    }
  }
  render() {
    let user = this.state.serverData.user ? this.state.serverData.user : false;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spotilyse</h1>
        </header>
        <p className="App-intro">Your Spotify personality dashboard</p>
        {this.state.serverData.user ? (
          <div>
            <img src={user.imageUrl} alt="" />
            <h2>{user.name}</h2>
            <span>{user.product}</span>
          </div>
        ) : (
          <button
            onClick={() => (window.location = "http://localhost:8888/login")}
          >
            Login
          </button>
        )}
      </div>
    );
  }
}

export default App;
