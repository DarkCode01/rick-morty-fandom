import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { handleError } from '../utils/handlers';

// api
import { CHARACTER } from '../services/api/queries/character';

// Components
import { Layout, PageHeader, Card, Typography } from 'antd';
import Character from '../components/characters/character';
import EpisodesList from '../components/episodes/EpisodesList';
import Loading from '../components/loading';


export default class Profile extends Component {
    constructor(props) {
      super(props);

      this.state = {}
    }

    render() {
      return (
        <Query
          query={ CHARACTER }
          variables={{ id: this.props.match.params.id }}
          onError={handleError}
          errorPolicy="all"
        >
          { ({ loading, error, data }) => {
              return (
                <>
                  <PageHeader
                    style={{
                      paddingLeft: '5%',
                      borderBottom: '3px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => { this.props.history.goBack() }}
                    title="Characters"
                    subTitle={ data ? data.character.name : 'Loading...' }
                  />

                  <Layout.Content style={{ padding: '5%' }}>
                    { loading && <Loading /> }
                    { data && <Character character={ data.character } /> }
                    <br />

                    { data
                      ? <Layout.Content> 
                          <Card>
                            <Typography.Title level={ 1 }>
                              Episodes
                            </Typography.Title>

                            {/* Espisodes list */}
                            <EpisodesList episodes={ data.character.episode } />
                          </Card>
                        </Layout.Content>
                      
                      : null
                    }
                  </Layout.Content>
                </>
              );
            }
          }
        </Query>
      );
    }
}