import React from "react";
import faker from "faker";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // this.setState({ term: "" });
  };

  onShuffleSumbit = () => {
    let term = faker.random.word();
    this.setState({ term: term });
    this.props.onFormSubmit(term);
  };

  render() {
    return (
      <div className="mdui-toolbar mdui-color-white">
        <i
          className="fab fa-youtube fa-2x"
          style={{ color: "red", marginRight: 0 }}
        ></i>
        <i
          className="fas fa-dice fa-2x"
          style={{ color: "indigo", marginLeft: "2px" }}
        ></i>
        <form
          onSubmit={this.onFormSubmit}
          id="searchForm"
          style={{ width: "50%", maxWidth: "500px" }}
        >
          <input
            className="mdui-textfield-input"
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={(event) => {
              this.setState({ term: event.target.value });
            }}
            style={{ display: "inline" }}
          />
        </form>

        <button
          className="mdui-btn mdui-color-indigo mdui-ripple"
          form="searchForm"
          style={{ minWidth: "60px" }}
        >
          <i className="mdui-icon material-icons">search</i>
        </button>

        <button
          className="mdui-btn mdui-color-indigo mdui-ripple"
          onClick={this.onShuffleSumbit}
          style={{ minWidth: "60px" }}
        >
          {/* <i className="mdui-icon material-icons">shuffle</i> */}
          <i className="fas fa-dice"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
