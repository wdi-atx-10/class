import React, { Component } from 'react';

class VideoDetail extends Component {
  render(){
    if(this.props.selectedVideo == null){
      return (<div>Loading....</div>)
    }

    const url = 'https://www.youtube.com/embed/' + this.props.selectedVideo.id.videoId;

    return(
      <div className="videoDetail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.selectedVideo.snippet.title}</div>
          <div>{this.props.selectedVideo.snippet.description}</div>
        </div>
      </div>
    )
  }
}


export default VideoDetail;
