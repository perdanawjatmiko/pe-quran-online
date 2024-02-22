'use client'

import React, {useState} from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'

const AudioPlay = ({src}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();
    const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

      const handleEnded = () => {
        setIsPlaying(false);
      };
    return (
        <div className='text-white'>
            <audio ref={audioRef} src={src} onEnded={handleEnded}></audio>
            <button onClick={togglePlay} className='rounded-full w-12 h-12 pl-0.5 bg-primary-400 hover:bg-sky-600 flex justify-center items-center'>
                {isPlaying ? <FaPause size={20}/> : <FaPlay size={20} />}
            </button>
        </div>
    )
}

export default AudioPlay