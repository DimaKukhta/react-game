import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../../utils';
import './authNickName.css';


const AuthNickName = () => {
    const [nickName, setNickName] = useState(getLocalStorage('nick-name') || '');

    const handleChange = (e) => {
        setNickName(e.target.value);
    }

    const handleSubmit = (e) => {
        setLocalStorage('first-game', false);
        setLocalStorage('nick-name', nickName);
    }

    return (
        <form>
            <label className="label-auth">
                Enter your nick-name
                <input 
                    className="input-nick-name"
                    type="text" 
                    value={nickName} 
                    onChange={handleChange}
                />
            </label>
            <NavLink to="/menu"
                className="submit-button"
                onClick={handleSubmit}>Save</NavLink>
        </form>
    );
}

export default AuthNickName;