import React from 'react';
import './GameOver.css';
import {Howl, Howler} from 'howler';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const audioClips = {sound4: 'dead.mp3'};

export default function GameOver(){
    const soundPlay = (src) => {
        const sound2 = new Howl ({
          src,
          html5: true
        })
        sound2.play()
      }

    return(
        <div className="bg-gameOver position button2">
            {soundPlay(audioClips.sound4)}
            <Link to='/card' type="button" className="btn btn-outline-light bn btn-size size3" onClick={() => soundPlay(audioClips.sound4)}> TRY AGAIN</Link>
            <Link to='/' type="button" className="btn btn-outline-light bn btn-size size4" onClick={() => soundPlay(audioClips.sound4)}>HOME</Link>
        </div>
    )
}




