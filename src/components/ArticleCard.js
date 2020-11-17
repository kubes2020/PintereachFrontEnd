import React from 'react';

const ArticleCard = props => {

    return (

        <div>
            <h1>{props.art_name}</h1>
            <p>{props.art_url}</p>
            <p>{props.rating}</p>
            <p>{props.category}</p>
        </div>

    )

}

export default ArticleCard