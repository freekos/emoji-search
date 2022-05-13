import React from 'react';

import "./style.scss";

const RecomendationItem = ({ title }) => {
    return (
        <p>
            {title.length > 8 ? `${title.slice(0, 9)}...` : title}
        </p>
    )
}
 
export default RecomendationItem;