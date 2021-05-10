import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { deleteArticle } from "../actions";
import "../style/Card.css";

const ArticleCard = (props) => {
    const del = () => {
        props.deleteArticle(props.id);
    };

    return (
        <div className="card-container">
            <div className="card">
                <button
                    onClick={del}
                    id="test"
                    className="btn btn-outline-danger delete-button"
                >
                    <span className="fas fa-times mr-2"></span>
                </button>
                <div className="card-body">
                    <h1 className="card-title">
                        <span className="props">{props.art_name}</span>
                    </h1>
                    <p className="card-text">
                        Rating: <span className="props">{props.rating}</span>
                    </p>
                    <p className="card-text">
                        Category:{" "}
                        <span className="props">{props.category}</span>
                    </p>
                    {/* <p className='card-text'>URL: <span className='props'>{props.art_url}</span></p> */}
                    <a
                        href={props.art_url}
                        className="blue-button btn btn-primary"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Goto Article
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

export default connect(mapStateToProps, { deleteArticle })(ArticleCard);
