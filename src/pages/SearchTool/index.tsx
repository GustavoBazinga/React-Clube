import React from 'react'
import SearchBar from '../../components/SearchBar'
import Container from '../../components/Container'


const index = () => {

    
    return (
      <div>
        <Container>
        <SearchBar url="http://192.168.100.20:3001/api/allSportsAndProfessors" />
        </Container>
      </div>
    )

}

export default index