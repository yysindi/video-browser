import './VideoItem.css'
import React from 'react'

const VideoItem = ( {video, onVideoSelect} ) => {
  return (
    <div onClick={e => onVideoSelect(video)} className="video-item item ">
      <img className="ui image" alt={video.snippet.description} key={video.id.videoId} src={video.snippet.thumbnails.medium.url} />
      <div className="content">{video.snippet.title}</div>
    </div>
    )
}

export default VideoItem
