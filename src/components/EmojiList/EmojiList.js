import React, { useEffect, useState } from 'react';

import "./style.scss";
import emojiFilter from "../../util/emojiFilter";
import EmojiItem from "./EmojiItem";

const EmojiList = ({ content }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(emojiFilter(content, 20))

    }, [content])

    return (
        <div className='List'>
            <div className='list_item'>
                {list && 
                list.map(emoji => (
                    <div key={emoji.title} className="card">
                        <EmojiItem emoji={emoji} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default EmojiList;