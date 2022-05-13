import React, { useState } from 'react';

import SearchInput from "./components/SearchInput/SearchInput";
import Recomendation from "./components/Recomendation/Recomendation";
import EmojiList from "./components/EmojiList/EmojiList";
import Title from "./components/Title/Title";

const App = () => {
    const [value, setValue] = useState("");

    return ( 
        <div>
            <Title />
            <SearchInput 
                content={value} 
                setContent={setValue}
            />
            <Recomendation />
            <EmojiList content={value} />
        </div>
     );
}
 
export default App;