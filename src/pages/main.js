import React, { Component } from 'react';
import { Query } from 'react-apollo';

// utils
import { handleError, ERRORS_MESSAGES } from '../utils/handlers';
import { getQueryParams } from '../utils/query-builder';

// Query
import { CHARACTERS }  from '../services/api/queries/character';

// components
import { Layout, Pagination, Divider, PageHeader, Empty, Icon } from 'antd';
import Loading from '../components/loading';
import CharactersList from '../components/characters/charactersList';
import FilterForm from '../components/filter';
import PageItem from '../components/pageItem';


export default class MainCharacters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      filter: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      }
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.changePage = this.changePage.bind(this);
    this.saveOptionstoFilter = this.saveOptionstoFilter.bind(this);
  }

  componentDidMount() {
    this.changePage();
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

  changePage() {
    const queryParams = getQueryParams(this.props.location);

    this.setState(state => ({
      ...state,
      page: Number(queryParams.get('page')) || 1
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
      <Query query={ CHARACTERS } variables={{ ...this.state.filter, page: this.state.page }} onError={ handleError }>
        { ({ loading, error, data }) => {
            return (
              <>
                <Layout.Header style={{ background: '#fff' }}>
                  <FilterForm handle={ this.handleSearch } save={ this.saveOptionstoFilter }/>
                </Layout.Header>
                <PageHeader
                  style={{
                    paddingLeft: '5%',
                    borderBottom: '3px solid rgb(235, 237, 240)',
                  }}
                  backIcon={ null }
                  onBack={() => null}
                  title="Characters"
                />
                
                <Layout.Content style={{ margin: '0 16px', padding: '24px', minHeight: 360 }}>
                  { loading && <Loading /> }
                  {
                    error && <Empty
                                image={ <Icon type="frown" /> }
                                imageStyle={{
                                  fontSize: '100px'
                                }}
                                style={{
                                  fontSize: '30px',
                                  margin: '10%'
                                }}
                                description={ ERRORS_MESSAGES.INTERNAL_SERVER_ERROR }
                              />
                  }
          
                  { data && <CharactersList characters={ data.characters.results } /> }
                  
                  {/* Pagination */}
                  <Divider />
                  <center>
                    {
                      data && <Pagination
                                onChange={ this.changePage }
                                itemRender={ PageItem('/') }
                                defaultCurrent={ this.state.page }
                                total={ data.characters.info.count }
                                pageSize={ 20 }
                              />
                    }
                  </center>
                </Layout.Content>
              </>
            )
          }
        }
      </Query>
    );
  }
}