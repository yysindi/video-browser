import React from 'react';
import SearchBar from './Components/SearchBar.js'
import axios from 'axios';
import VideoList from './Components/VideoList.js'
import SelectedVideo from './Components/SelectedVideo.js'

class App extends React.Component {

  state = {videos: [], selectedVideo: null}

  componentDidMount() {
    this.onSearchSubmit ('cars');
  }

  onSearchSubmit = (term) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        type: 'video',
        q: term,
        key: 'AIzaSyDNC_S72YxmIgvFFnikVHoysZ8CtXZHrxU',
      }

    }).then(response => {
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <SelectedVideo video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
