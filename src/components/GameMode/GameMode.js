import React, { useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../../utils';


const GameMode = () => {
    const [defaultMode, setDefaultMode] = useState(getLocalStorage('default-mode'));
    const [speed, setSpeed] = useState(getLocalStorage('speed'));
    const [crazyMode, setCrazyMode] = useState(getLocalStorage('crazy-mode'));

    useEffect(() => {
        setLocalStorage('default-mode', defaultMode);
    }, [defaultMode]);

    useEffect(() => {
        setLocalStorage('speed', speed);
    }, [speed]);

    useEffect(() => {
        setLocalStorage('crazy-mode', crazyMode);
        if (crazyMode) {
            setSpeed(20);
        }
    }, [crazyMode])

    const onChangeFirstForm = () => {
        setDefaultMode(!defaultMode);
    }

    const onChangeSecondForm = (e) => {
        const fastSpeed = 25;
        const slowSpeed = 50;
        const extremeSpeed = 20;
        if (e.target.value === 'slow') {
            setSpeed(slowSpeed);
        } else if (e.target.value === 'fast') {
            setSpeed(fastSpeed);
        } else {
            setSpeed(extremeSpeed);
        }
    }

    const onChangeThirdForm = () => {
        setCrazyMode(!crazyMode);
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
                <p><input name="speed" type="radio" value="extreme" checked={speed === 20} onChange={onChangeSecondForm}/> Extreme</p>
            </form>
            <form>
                <p>Crazy mode:</p>
                <p><input name="crazyMode" type="radio" value="on" checked={crazyMode} onChange={onChangeThirdForm}/> On</p>
                <p><input name="crazyMode" type="radio" value="of" checked={!crazyMode} onChange={onChangeThirdForm}/> Off</p>
            </form>
        </div>
    )
}

export default GameMode;