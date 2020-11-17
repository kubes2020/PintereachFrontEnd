import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { deleteArticle } from '../actions'
//change for commit
import '../style/Card.css'

const ArticleCard = props => {

    const del = () => {
        console.log(props)
        console.log(props.id)
        props.deleteArticle(props.id)
    }

    return (
            <div className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='card-title'><span className='props'>{props.art_name}</span></h1>
                        <p className='card-text'>Rating: <span className='props'>{props.rating}</span></p>
                        <p className='card-text'>Category: <span className='props'>{props.category}</span></p>
                        <p className='card-text'>URL: <span className='props'>{props.art_url}</span></p>
                        <a href={props.art_url} className='btn btn-primary'>Goto Article</a>
                        <button onClick={del} className='btn btn-danger'><span className="fas fa-times mr-2"></span>Delete Article</button>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, { deleteArticle })(ArticleCard)
