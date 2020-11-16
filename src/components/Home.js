import { connect } from "react-redux"
import {getData} from '../actions'

export default function Home () {
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

export default connect(mapStateToProps, {getData}) (Home)