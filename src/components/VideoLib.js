import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LIBRARY_URL = 'http://localhost:3000/videos'

const VideoLib = () => {

  const [videoList, setVideoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    axios.get(LIBRARY_URL)
    .then((response) => {
      // Get the list of videos
      setVideoList(response.data)
    })
    .catch((error) => {
      setErrorMsg(error.message);
      console.log(error.message);
    })
  }, []);

  const videoListView = videoList.map( video => {
    return (
      <div>
        <h3>{video.title}</h3>
        <p>id: {video.id}</p>
        <p>overview: {video.overview}</p>
        <p>release_date: {video.release_date}</p>
        <p>available_invetory: {video.inventory}</p>
        <img src={video.image_url}  alt =''/> 
      </div>
    )
  });
  return(
    <div className='library'>
      { errorMsg ? <div><h2 className='error-msg'>{errorMsg}</h2></div> : '' }
      <h1>Libarian needed</h1>
      { videoListView }
    </div>
  );
}

export default VideoLib;