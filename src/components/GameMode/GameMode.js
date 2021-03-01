import React, { useState } from 'react';
import { setLocalStorage } from '../../utils';


const GameMode = () => {
    const [defaultMode, setDefaultMode] = useState(JSON.parse(localStorage.getItem('default-mode')));

    const onChange = () => {
        setDefaultMode(!defaultMode);
        setLocalStorage('default-mode', defaultMode);
    }

    return (
        <div>
            <form>
                <p>The style of game field:</p>
                <p><input name="theme-light" type="radio" value="light" checked={!defaultMode} onChange={onChange}/> Light</p>
                <p><input name="theme-dark" type="radio" value="dark" checked={defaultMode} onChange={onChange}/> Dark</p>
            </form>
        </div>
    )
}

export default GameMode;