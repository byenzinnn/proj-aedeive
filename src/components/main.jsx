import React from 'react';
import videoBg from '../assets/vids/videoBg';
import "index.css"

const Main = () => {
  return (
    <div className='main'>
        <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main