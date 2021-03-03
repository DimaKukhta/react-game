import React, { useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../../utils';


const GameMode = () => {
    const [defaultMode, setDefaultMode] = useState(getLocalStorage('default-mode'));
    const [speed, setSpeed] = useState(getLocalStorage('speed'));

    useEffect(() => {
        setLocalStorage('default-mode', defaultMode);
    }, [defaultMode]);

    useEffect(() => {
        setLocalStorage('speed', speed);
    }, [speed]);

    const onChangeFirstForm = () => {
        setDefaultMode(!defaultMode);
    }

    const onChangeSecondForm = (e) => {
        const fastSpeed = 25;
        const slowSpeed = 50;
        if (e.target.value === 'slow') {
            setSpeed(slowSpeed);
        } else {
            setSpeed(fastSpeed);
        }
    }

    return (
        <div>
            <form>
                <p>The style of game field:</p>
                <p><input name="theme" type="radio" value="light" checked={!defaultMode} onChange={onChangeFirstForm}/> Light</p>
                <p><input name="theme" type="radio" value="dark" checked={defaultMode} onChange={onChangeFirstForm}/> Dark</p>
            </form>
            <form>
                <p>The speed of game:</p>
                <p><input name="speed" type="radio" value="slow" checked={speed === 50} onChange={onChangeSecondForm}/> Slow</p>
                <p><input name="speed" type="radio" value="fast" checked={speed === 25} onChange={onChangeSecondForm}/> Fast</p>
            </form>
        </div>
    )
}

export default GameMode;