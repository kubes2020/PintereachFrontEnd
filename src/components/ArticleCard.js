import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Card.css'

const ArticleCard = props => {

    return (
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='card-title'><span className='props'>{props.art_name}</span></h1>
                        <p className='card-text'>Rating: <span className='props'>{props.rating}</span></p>
                        <p className='card-text'>Category: <span className='props'>{props.category}</span></p>
                        <p className='card-text'>URL: <span className='props'>{props.art_url}</span></p>
                        <a href={props.art_url} className='btn btn-primary'>Goto Article</a>
                    </div>
                </div>
            </div>
    )
}

export default ArticleCard;
