import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ArticleList from "./ArticleList"
import '../style/home.css'

function Home() {
    return (
        <>
           <div>
                <Link className='btn btn-info btn-lg btn-block mt-3 mb-3' to="/add">Add an article</Link>
                <ArticleList></ArticleList>
           </div>  
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: [],
        error: ''
    }
}

export default connect(mapStateToProps)(Home)
