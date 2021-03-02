import React, { useState, useEffect } from 'react';
import { getBestPlayers } from './../../utils';



const TopPlayers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( async () => {
        const bestPlayers = await getBestPlayers();
        setData(bestPlayers);
    });

    useEffect(() => {
        if (data.length) {
            setLoading(false);
        }
    }, [data]);

    return (
        <div>
            {loading
            ?   <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            :   <ul>
                    {data.map((element, index) => <li key={index}>{index + 1}. {element.nickName}, {element.score}, {element.date}</li>)}
                </ul>
            }
        </div>
    )
}

export default TopPlayers;