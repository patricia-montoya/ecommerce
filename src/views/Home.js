import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchInput from '../components/Search' 
import ItemList from '../components/ItemList'
import Filters from '../components/Filters'

class Home extends React.Component {
  
  componentDidMount() {
    this.props.fetchItems()
  }
  
  render() {
    return (
      <>
        <MainLayout>
            <SearchInput position="absolute" top="0" right="0" width="30%"/>
            <ItemList className="items-container" {...this.props}/>
        </MainLayout>
        <Filters />
      </>
    )
  }
}

export default Home