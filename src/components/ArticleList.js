import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "../style/filter.css";
import "../style/login.css";
const { connect } = require("react-redux");
const { fetchData, filterArticles } = require("../actions");

function ArticleList(props) {
    const fetch = () => {
        props.fetchData();
    };

    useEffect(() => {
        fetch();
    }, []);

    const [search, setSearch] = useState();

    const handleChanges = (e) => {
        setSearch(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        props.filterArticles(search);
    };

    const reset = (e) => {
        e.preventDefault();
        props.filterArticles("");
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select
                        className="form-control"
                        id="category"
                        onChange={handleChanges}
                        name="category"
                    >
                        <option value="">---Select a Category---</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Books">Books</option>
                        <option value="Economics">Economics</option>
                        <option value="Education">Education</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Humor">Humor</option>
                        <option value="Hobbies">Hobbies</option>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="News">News</option>
                        <option value="Politics">Politics</option>
                        <option value="Recipes">Recipes</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Sports">Sports</option>
                        <option value="Technology">Technology</option>
                        <option value="TV Shows">TV Shows</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button onClick={reset} className="btn btn-danger">
                    {" "}
                    Reset{" "}
                </button>
                <button className="blue-button btn btn-primary">Search</button>
            </form>
            {/* If searchTerm is "", then map through all articles, otherwise filter articles based on searchTerm and map through results */}
            <div className="test">
                {props.searchTerm === ""
                    ? props.articles.map((item) => {
                          return (
                              <ArticleCard
                                  id={item.id}
                                  key={item.id}
                                  art_name={item.art_name}
                                  art_url={item.art_url}
                                  rating={item.rating}
                                  category={item.category}
                              />
                          );
                      })
                    : props.articles
                          .filter((art) => art.category === props.searchTerm)
                          .map((item) => {
                              return (
                                  <ArticleCard
                                      id={item.id}
                                      key={item.id}
                                      art_name={item.art_name}
                                      art_url={item.art_url}
                                      rating={item.rating}
                                      category={item.category}
                                  />
                              );
                          })}
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        searchTerm: state.searchTerm,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, { fetchData, filterArticles })(
    ArticleList
);
