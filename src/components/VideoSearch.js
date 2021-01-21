import React, { useState } from 'react';
import axios from 'axios';
import VideoSearchForm from './VideoSearchForm';
import VideoSearchResult from './VideoSearchResult';

const VIDEO_URL = 'http://localhost:3000/videos?query='

const VideoSearch = () => {
  
  const [videoSearchList, setVideoSearchList] = useState([])
  const [errorMsg, setErrorMsg] = useState(null);

  const searchVideos = (title) => {
    axios.get(`${VIDEO_URL}${title}`)
    .then((response) => {
      setVideoSearchList(response.data);
    })
    .catch((error) => {
      setErrorMsg(error.message);
      console.log(error.message);
    })
  }

  const videoSearchView = videoSearchList.map( video => {
    return (
      <VideoSearchResult video = {video}/>
    )
  });

  return (
    <div className='Search'>
      <VideoSearchForm searchVideoCallback = {searchVideos}/>
      { errorMsg ? <div><h2 className='error-msg'>{errorMsg}</h2></div> : '' }
      {videoSearchView}
    </div>
  )};

export default VideoSearch;