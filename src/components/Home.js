import { connect } from "react-redux"

function Home () {
    return (
        <div>
            Placeholder
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: [],
        error: ''
    }
}

export default connect(mapStateToProps) (Home)