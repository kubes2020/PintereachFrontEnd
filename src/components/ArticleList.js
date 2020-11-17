import { useEffect } from 'react';
import ArticleCard from './ArticleCard';
const { connect } = require("react-redux");
const { fetchData } = require("../actions");

function ArticleList(props) {

    const fetch = () => {
        props.fetchData()
    }

    useEffect(() => {
        fetch()
        // console.log
    }, [])

    return (
        <div className='test'>
            {props.articles.map((item)=>{
                return (
                    <ArticleCard
                        id={item.id}
                        key={item.id}
                        art_name={item.art_name}
                        art_url={item.art_url}
                        rating={item.rating}
                        category={item.category}
                    />)
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