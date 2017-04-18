import React, { Component } from 'react';
import VideoListItem from './VideoListItem.js';

class VideoList extends Component {
  render(){
    console.log(this.props.videos);
    const videoItems = this.props.videos.map((video)=>{
      return (<VideoListItem
                key={video.id.videoId}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.default.url}
                changeSelectedVideo={this.props.changeSelectedVideo}
                video={video}
                id={ video.id.videoId } />)
    });

    return(
      <ul className="col-md-4 list-group">
        { videoItems }
      </ul>
    )
  }
}


export default VideoList;
