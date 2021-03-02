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
        setLocalStorage('first-game', 'true');
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