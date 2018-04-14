import React from 'react'
import List from '../components/List'
import {connect} from 'react-redux'
import {loadData} from '../store/list/actions'

export class Home extends React.Component {
  componentDidMount () {
    this.props.loadData()
  }
  render () {
    return (
      <section className='Home'>
        <button onClick={this.props.loadData}>Refresh</button>
        <List {...this.props} />
      </section>
    )
  }
}

const mapStateToProps = ({list}) => ({
  data: list.data,
  error: list.error,
  fetching: list.fetching
})

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)