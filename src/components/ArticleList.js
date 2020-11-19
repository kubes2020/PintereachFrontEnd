import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
const { connect } = require("react-redux");
const { fetchData, filterArticles } = require("../actions");

function ArticleList(props) {

    const fetch = () => {
        props.fetchData()
    }

    useEffect(() => {
        fetch()
        // console.log
    }, [])

    const [search, setSearch] = useState()

    const handleChanges = (e) => {
        setSearch(e.target.value)
    }

    const submit = e => {
        e.preventDefault()
        props.filterArticles(search)
    }

    const reset = e => {
        e.preventDefault()
        props.filterArticles('')
    }

    return (
        <>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="category">Catgory:  </label>
                    <select class="form-control" id="category" onChange={handleChanges} name='category'>
                        <option value=''>---Select a Category---</option>
                        <option value='Automotive'>Automotive</option>
                        <option value='Books'>Books</option>
                        <option value='Economics'>Economics</option>
                        <option value='Education'>Education</option>
                        <option value='Gaming'>Gaming</option>
                        <option value='Humor'>Humor</option>
                        <option value='Hobbies'>Hobbies</option>
                        <option value='Movies'>Movies</option>
                        <option value='Music'>Music</option>
                        <option value='News'>News</option>
                        <option value='Politics'>Politics</option>
                        <option value='Recipes'>Recipes</option>
                        <option value='Restaurants'>Restaurants</option>
                        <option value='Sports'>Sports</option>
                        <option value='Technology'>Technology</option>
                        <option value='TV Shows'>TV Shows</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <Link onClick={reset} className="btn btn-danger"> Reset </Link>
                <button>Search</button>
            </form>
            <div className='test'>
                {props.articles.map((item) => {
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
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, { fetchData, filterArticles })(ArticleList)