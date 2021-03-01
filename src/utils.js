export const saveToLocalStorageBestGame = (score) => {
    console.log(score);
    const data = JSON.parse(localStorage.getItem('best-game')) || [];
    const result = {
        score: score,
        date: new Date()
    };
    data.push(result);
    console.log(data);
    data.sort((a, b) => a.score < b.score ? 1 : -1);
    console.log(data);
    localStorage.setItem('best-game', JSON.stringify(data.slice(0, 5)));
}

export const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const nullFn = (value, defaultValue) => {
    if (value === null) {
        return defaultValue;
    }
    return value;
}

export const getInitialStateToLocalSotage = () => {
    if (getLocalStorage('default-mode') === null || getLocalStorage('background-audio') === null) {
        setLocalStorage('default-mode', true);
        setLocalStorage('background-audio', true);
        setLocalStorage('audio-effect', true);
        setLocalStorage('background-audio-volume', 10);
        setLocalStorage('audio-effect-volume', 10);
        setLocalStorage('speed', 50);
    }
}