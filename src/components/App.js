import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, errMsg: "" };

  componentDidMount = () => {
    this.onFormSubmit("");
  };

  onFormSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (error) {
      this.setState({ errMsg: error });
    }
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if (this.state.videos.length === 0) {
      return (
        <div>
          <SearchBar onFormSubmit={this.onFormSubmit} />
          <div className="mdui-progress">
            <div className="mdui-progress-indeterminate"></div>
          </div>

          <div
            className="mdui-container"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            {this.state.errMsg ? (
              <p>
                {this.state.errMsg.toString()}
                <br /> You have reached the Youtube Data API quota limit today.
              </p>
            ) : (
              "Loading"
            )}
          </div>
        </div>
      );
    }

    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="mdui-container">
          <div className="mdui-row">
            <div className="mdui-col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="mdui-col-md-4">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
