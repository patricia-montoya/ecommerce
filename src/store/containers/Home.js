import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'

import Home from '../../views/Home'

const mapStateToProps = ({ items }) => ({
    items
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)