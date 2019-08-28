import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/items'

import Home from '../../views/Home'

const mapStateToProps = ({ data }) => ({
    items: data
  })

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)