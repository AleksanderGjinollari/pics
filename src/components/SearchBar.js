import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("clicked");
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Type"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
