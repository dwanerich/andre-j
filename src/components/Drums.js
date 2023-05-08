import React from 'react'
import './style.css'
import '../index.css'
const Drums = () => {


   window.addEventListener('keydown', function(e) {
    console.log(e)
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`.sound[data-key ="${e.keyCode}"]`);
    console.log('logging key', key)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.toggle('playing')
    console.log(audio)
   })


window.addEventListener('click', function (e) {
       let sample = document.querySelector(`audio[id ="${e.target.id}"]`)
        // console.log(e.target.id)
        if (!sample) return;
        sample.currentTime = 0;
        sample.play()
    })

  return (
    <div className='container-fluid'style={{height: '400px', textAlign: 'center', borderStyle: 'solid', borderColor: 'white', marginTop: '50px', marginBottom: '150px', color: 'black', backgroundSize: 'cover'}}>
    <h1 style={{backgroundColor: 'white'}}>drum machine
            </h1>
                <h5 style={{backgroundColor: 'white'}}>Custom Kit by Dwane </h5>
            <br />
            <hr /> <br />

    <div className="drum-machine-container">

      <div>
<audio data-key="65" id='1' src="kit/KICK_INSIDE_JOB_SUB.wav"></audio>
<audio data-key="83" id='2' src="kit/CLAP_INSANITY.wav"></audio>
<audio data-key="68" id='3' src="kit/HIHAT_DEAD_ASS.wav"></audio>
<audio data-key="70" id='4' src="kit/1 | Fx.wav"></audio>

<audio data-key="74" id='5' src="kit/KICK_DETER.wav"></audio>
<audio data-key="75" id='6' src="kit/7 | Fx.wav"></audio>
<audio data-key="76" id='7' src="kit/14 | Fx.wav"></audio>
<audio data-key="186" id='8' src="kit/8 | Fx.wav"></audio>

      </div>

            <span id='1' data-key="65" className="sound">A</span>
            <span id='2' data-key="83" className="sound">S</span>
            <span id='3' data-key="68" className="sound">D</span>
            <span id='4' data-key="70" className="sound">F</span>
            <span id='5' data-key="74" className="sound">J</span>
            <span id='6' data-key="75" className="sound">K</span>
            <span id='7' data-key="76" className="sound">L</span>
            <span id='8' data-key="186" className="sound">;</span>
    </div>
</div>


  )
}

export default Drums
