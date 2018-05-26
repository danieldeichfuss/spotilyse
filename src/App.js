import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import Main from "./Components/main";
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
    return (
      <div className="App">
        <Header />
        <Main serverData={this.state.serverData} initLogin={this.initLogin} />
      </div>
    );
  }

  initLogin = () => (window.location = "http://localhost:8888/login");
}

export default App;
