import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchInput from '../components/Search' 
import ItemList from '../components/ItemList'
import Filters from '../components/Filters'

class Home extends React.Component {
  
  componentDidMount() {
    console.log(this.props.fetchItems())
  }
  
  
  render() {
    const { items } = this.props
    return (
      <>
        <MainLayout>
            <SearchInput position="absolute" top="0" right="0" width="30%"/>
            <ItemList className="items-container" />
        </MainLayout>
        <Filters />
      </>
    )
  }
}

export default Home