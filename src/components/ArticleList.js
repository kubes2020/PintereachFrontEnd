import {useEffect } from 'react';
const { connect } = require("react-redux")
const { fetchData } = require("../actions")

function ArticleList(props) {

    const fetch = () => {
        props.fetchData()
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {props.articles.map((item)=>{
                return item.art_name
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, { fetchData })(ArticleList)