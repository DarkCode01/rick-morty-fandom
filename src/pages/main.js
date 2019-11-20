import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Layout } from 'antd';

import Loading from '../components/loading';
import Alert from '../components/alert';
import CharactersList from '../components/characters/charactersList';
import FilterForm from '../components/filter';

// Query
import { QUERY }  from '../services/api';


class MainCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      }
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.saveOptionstoFilter = this.saveOptionstoFilter.bind(this);
  }

  handleSearch(event) {
    event.persist();

    this.setState(state => ({
      ...state,
      filter: {
        ...this.state.filter,
        [ event.target.name ]: event.target.value
      }
    }));
  }

  saveOptionstoFilter(filter) {
    this.setState(state => ({
      ...state,
      filter: filter
    }));
  }

  render() {
    return (
      <Query query={QUERY.GET_CHARACTERS} variables={ this.state.filter }>
        { ({ loading, error, data }) => {
            return (
              <>
                <Layout.Header style={{ background: '#fff' }}>
                  <FilterForm handle={ this.handleSearch } save={ this.saveOptionstoFilter }/>
                </Layout.Header>
                
                <Layout.Content style={{ margin: '0 16px', padding: '24px', minHeight: 360 }}>
                  { loading && <Loading /> }
                  { error && <Alert message="Error" description="Intentelo mas tarde. " type="warning" /> }
          
                  { data && <CharactersList characters={ data.characters.results } /> }
                </Layout.Content>
              </>
            )
          }
        }
      </Query>
    );
  }
}

export default MainCharacters;