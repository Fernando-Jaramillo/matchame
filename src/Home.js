import React from 'react';
import './Home.css';
import {Howl, Howler} from 'howler';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  const audioClips = {sound2: 'buttons.mp3'}


export default function Home(){
    const soundPlay = (src) => {
        const sound2 = new Howl ({
          src,
          html5: true
        })
        sound2.play()
      }
    return(
    <div className="bg-home button">
        <Link to='/card' className="btn btn-outline-light size2" onClick={() => soundPlay(audioClips.sound2)}>PLAY</Link> 
    </div>
    )
}




{/* <button onClick={() => setCount(count + 1)}></button> */}