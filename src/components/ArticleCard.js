import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { deleteArticle } from '../actions'
//change for commit

const ArticleCard = props => {

    const del = () => {
        console.log(props)
        console.log(props.id)
        props.deleteArticle(props.id)
    }

    return (

        <div class='card'>
            <div class='card-body'>
                <h1 class='card-title'>{props.art_name}</h1>
                <p class='card-text'>Rating: {props.rating}</p>
                <p class='card-text'>Category: {props.category}</p>
                <p class='card-text'>URL: {props.art_url}</p>
                <a href={props.art_url} class='btn btn-primary'>Goto Article</a>
                <button onClick={del} className='btn btn-danger'><span className="fas fa-times mr-2"></span>Delete Article</button>
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
