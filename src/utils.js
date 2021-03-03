export const saveToLocalStorageBestGame = (score) => {
    const data = JSON.parse(localStorage.getItem('best-game')) || [];
    const result = {
        score: score,
        date: new Date()
    };
    data.push(result);
    data.sort((a, b) => a.score < b.score ? 1 : -1);
    localStorage.setItem('best-game', JSON.stringify(data.slice(0, 10)));
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
    if (getLocalStorage('default-mode') === null || getLocalStorage('background-audio') === null || getLocalStorage('nick-name') === null) {
        setLocalStorage('default-mode', true);
        setLocalStorage('background-audio', true);
        setLocalStorage('audio-effect', true);
        setLocalStorage('background-audio-volume', 10);
        setLocalStorage('audio-effect-volume', 10);
        setLocalStorage('speed', 50);
        setLocalStorage('nick-name', 'Player' + Math.floor(Math.random() * 100));
        setLocalStorage('first-game', true);
        setLocalStorage('crazy-mode', false);
    }
}

export const updateBestPlayersList = async (score) => {
    const nickName = getLocalStorage('nick-name');
    const player = {
        nickName,
        score,
        date: new Date()
    };

    const response = await fetch('https://react-game123.herokuapp.com/newBestPlayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(player),
    });
}

export const getBestPlayers = async () => {
    const response = await fetch('https://react-game123.herokuapp.com/best-players');
    const json = await response.json();
    return json;
}

export const getRandomNumbers = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x,y]
}

export const getStateFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('state'));
}

export const updateLocalStorage = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
}

export const volumeOfSound = (value) => JSON.parse(localStorage.getItem(value)) / 10;
