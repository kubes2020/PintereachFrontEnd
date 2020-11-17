import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ArticleList from "./ArticleList"

function Home () {
    return (
        <>
        <Link to ="/add">Add article</Link>
        <ArticleList></ArticleList>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: [],
        error: ''
    }
}

export default connect(mapStateToProps) (Home)