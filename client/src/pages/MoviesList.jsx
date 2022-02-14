import React, { Component } from "react";
import ReactTable from 'react-table-v6';
import api from "../api";

import styled from "styled-components";

import 'react-table-v6/react-table.css'
import apis from "../api";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`

class MoviesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
  
    api.getAllMovies().then(movies => {
      this.setState({
        movies: movies.data.data,
        isLoading: false,
        data: JSON
      })

    })
  }

  render() {
    const { movies, isLoading } = this.state
    console.log('This should only show once')
    console.log('TCL: MoviesList -> render -> movies', movies)

    //create columns ID, Name, Rating, Time
    const columns = [
      {
        Header: 'ID',
        Accessor: 'id',
        filterable: true,
      },
      {
        Header: 'Name',
        Accessor: 'movies.name',
        filterable: true,
      },
      {
        Header: 'Rating',
        Accessor: 'movies.rating',
        filterable: true,
      },
      {
        Header: 'Time',
        Accessor: 'movies.time',
        
      }
    ]

    // let showTable = true
    // if (!movies.length) {
    //   showTable = false;
    // }

    return (
      <Wrapper>
          <ReactTable
            data={movies}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        
      </Wrapper>
    );
  }
}

export default MoviesList;
