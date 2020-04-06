import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { EPISODES } from '../services/api/queries/episode';
import { getQueryParams } from '../utils/query-builder';

import { Layout, PageHeader, Card, Pagination } from 'antd';
import Loading from '../components/loading';
import EpisodesList from '../components/episodes/EpisodesList';
import PageItem from '../components/pageItem';


export default class Episodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      filter: {
        name: ""
      }
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    const queryParams = getQueryParams(this.props.location);

    this.setState(state => ({
      ...state,
      page: queryParams.get('page') || 1
    }));
  }

  render() {
    return (
      <Query query={ EPISODES } variables={{ page: this.state.page, name: this.state.filter.name }}>
        { ({ loading, error, data }) => {
            return (
              <Layout.Content>
                <PageHeader
                  style={{
                    paddingLeft: '5%',
                    borderBottom: '3px solid rgb(235, 237, 240)',
                  }}
                  title="Episodes"
                  backIcon=""
                />

                { loading && <Loading /> }

                { data
                  ? <Layout.Content>
                      <Card>
                        <EpisodesList episodes={ data.episodes.results } />
                      </Card>
                    </Layout.Content>
                  : null
                }
                <br />
                <center>
                  { data
                    ? <Pagination
                        onChange={ () => {} }
                        itemRender={ PageItem('/episodes') }
                        defaultCurrent={ 1 }
                        total={ data.episodes.info.count }
                        pageSize={ 20 }
                      />
                    : null
                  }
                </center>                
              </Layout.Content>
            )
          }
        }
      </Query>
    );
  }
}