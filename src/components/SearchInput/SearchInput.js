import React, { useState } from 'react';

import "./style.scss";

const SearchInput = ({ content, setContent }) => {
    return ( 
        <div className='Input_Container'>
            <input 
                className='input' 
                value={content} 
                onChange={(e) => setContent(e.target.value)}
                placeholder="Emoji Name"
            />
        </div>
     );
}
 
export default SearchInput;