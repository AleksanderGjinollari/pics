import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID C2JsTu7B2S0MjVeHoss13JUKd7fN5U4zXFJnqMJCqYg",
      },
    });
    console.log(response.data.results);
    // .then((response) => {
    //   console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
