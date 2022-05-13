import React from 'react';

const EmojiItem = ({ emoji }) => {
    return ( 
        <>
            <div className='symbol'>{emoji.symbol}</div>
            <div className='content'>
                <p className='content_title'>{emoji.title}</p>
                <p className='content_keyword'>{emoji.keywords}</p>
            </div>
        </>
     );
}
 
export default EmojiItem;