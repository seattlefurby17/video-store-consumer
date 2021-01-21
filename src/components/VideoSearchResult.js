import React,  {useState } from 'react';
import axios from 'axios';

const LIBRARY_URL = 'http://localhost:3000/videos'

const VideoSearchResult = (props) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const onButtonClick = () => {
        axios.post(LIBRARY_URL, {inventory: 1, ...props.video})
        .then((response) => {
          if(response.data.title){
            setSuccessMsg('Video Added!')
          } else {
            setSuccessMsg('Video Already in Library')
          }
          

    })
        .catch((error) => {
        setErrorMsg(error.message);
        console.log(error.message);
    })
  }
  
  return (
    <div>
      <h3>{props.video.title}</h3>
      <p>overview: {props.video.overview}</p>
      <p>release_date: {props.video.release_date}</p>
      <img src={props.video.image_url}  alt =''/> 
      {successMsg ? successMsg : errorMsg}
      <button onClick ={onButtonClick}>Add Movie to Library</button>
    </div>
  )
}

export default VideoSearchResult;