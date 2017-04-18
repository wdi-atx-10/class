import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.js';
import VideoDetail from './components/VideoDetail.js';
import VideoList from './components/VideoList.js';
import _ from 'lodash';
import './App.css';

// AIzaSyDoQMExpBJGbyzOSCBLu2RncN5_BN3LhGw
// https://www.youtube.com/embed/

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount(){
    this.search('monkeys');
  }

  changeSelectedVideo(video){
    this.setState({
      selectedVideo: video
    })
  }

  search(term){
    axios.get('https://www.googleapis.com/youtube/v3/search',{
      params: {
        q: term,
        key: 'AIzaSyDoQMExpBJGbyzOSCBLu2RncN5_BN3LhGw',
        type: 'video',
        part: 'snippet'
      }
    }).then((response)=>{
      console.log(response);
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    }).catch((error)=>{
      console.error(error);
    });
  }

  render() {
    const videoSearch = _.debounce( term => { this.search(term) }, 300);

    return (
      <div className="container">
        <div className="row">
          <SearchBar search={videoSearch}/>
        </div>
        <div className="row">
          <VideoDetail selectedVideo={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} changeSelectedVideo={this.changeSelectedVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
