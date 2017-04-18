import React, { Component } from 'react';

class VideoListItem extends Component {
  render(){
    return(
      <li onClick={(e)=>{ this.props.changeSelectedVideo(this.props.video) }} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" alt="video thumbnail" src={this.props.thumbnail} />
          </div>

          <div className="media-body">
            <div className="media-heading">{this.props.title}</div>
          </div>
        </div>
      </li>
    )
  }
}


export default VideoListItem;
