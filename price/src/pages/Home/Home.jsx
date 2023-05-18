import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import Table from '../../components/Table/Table'
const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        
        <div className="listContainer">
          <div className="listTitle1">
              Add Price
          </div>
          <Table/>
        </div>
       </div>
    </div>
   
  )
}

export default Home