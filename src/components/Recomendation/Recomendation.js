import React, { useEffect, useRef, useState } from 'react';

import "./style.scss";

import emojiList from "../../emojiList.json";
import RecomendationItem from './RecomendationItem';
const limit = 5;

const Recomendation = () => {
    const [amount, setAmount] = useState([5, 10])
    const [recmonededs, setRecomendeds] = useState(emojiList.slice(0, 5))
    const delay = 3000;
    const timeoutRef = useRef(null);

    const resetTimeOut = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeOut();
        timeoutRef.current = setTimeout(() => {
            setRecomendeds(emojiList.slice(amount[0], amount[1]));
            setAmount((prevAmount) => prevAmount[1] === emojiList.length - 1 ? [0, limit] : [prevAmount[0] + limit, prevAmount[1] + limit]);
        }, delay)

        return () => {
            resetTimeOut();
        }
    })

    return ( 
        <div className='Recomendeds'>
            {recmonededs.map(recomended => (
                <div key={recomended.title} className="Recomended" >
                    <RecomendationItem title={recomended.title}/>
                </div>
            ))}
        </div>
     );
}
 
export default Recomendation;