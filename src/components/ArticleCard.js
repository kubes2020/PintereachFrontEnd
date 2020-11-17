import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleCard = props => {

    return (

        <div class='card'>
            <div class='card-body'>
                <h1 class='card-title'>{props.art_name}</h1>
                <p class='card-text'>Rating: {props.rating}</p>
                <p class='card-text'>Category: {props.category}</p>
                <p class='card-text'>URL: {props.art_url}</p>
                <a href={props.art_url} class='btn btn-primary'>Goto Article</a>
            </div>
        </div>

    )

}

export default ArticleCard
