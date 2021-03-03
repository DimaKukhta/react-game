import React, { useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../../utils';

const AudioSettings = () => {
    const [backgroundAudioPlay, setBackgroundAudioPlay] = useState(getLocalStorage('background-audio'));
    const [audioEffectPlay, setAudioEffectPlay] = useState(getLocalStorage('audio-effect'));
    const [volumeBackgroundAudio, setVolumeBackgroundAudio] = useState(getLocalStorage('background-audio-volume'));
    const [volumeAudioEffect, setVolumeAudioEffect] = useState(getLocalStorage('audio-effect-volume'));
    
    useEffect(() => {
        setLocalStorage('background-audio', backgroundAudioPlay);
    }, [backgroundAudioPlay]);

    useEffect(() => {
        setLocalStorage('audio-effect', audioEffectPlay);
    }, [audioEffectPlay])


    const changeVolumeOfBackgroundAudio = (e) => {
        setVolumeBackgroundAudio(e.target.value);
        setLocalStorage('background-audio-volume', e.target.value);
    }

    const changeVolumeOfAudioEffect = (e) => {
        setVolumeAudioEffect(e.target.value);
        setLocalStorage('audio-effect-volume', e.target.value);
    }

    return (
        <div>
            <h3>Background audio</h3>
    
            <label> On / off  
                <input type="checkbox"
                    name="backgroundAudio"
                    checked={backgroundAudioPlay}
                    onChange={() => setBackgroundAudioPlay(!backgroundAudioPlay)}
                    />
            </label>
            <div>Volume of background audio</div>
            <input type="range" 
                name="volumeOfBackgroundAudio" 
                min="1" 
                max="10" 
                value={volumeBackgroundAudio} 
                onChange={changeVolumeOfBackgroundAudio} 
                />
            <span> {volumeBackgroundAudio * 10 + '%'} </span>
            <h3>Audio Effect</h3>
            <label>On / off
                <input 
                    type="checkbox"
                    name="audioEffect"
                    checked={audioEffectPlay}
                    onChange={() => setAudioEffectPlay(!audioEffectPlay)}
                    />
            </label>
            <div>Volume of audio effects</div>
             <input type="range" 
                name="volumeOfAudioEffect" 
                min="1" 
                max="10" 
                value={volumeAudioEffect} 
                onChange={changeVolumeOfAudioEffect} 
                />
            <span> {volumeAudioEffect * 10 + '%'} </span>
        </div>
    )
}

export default AudioSettings;