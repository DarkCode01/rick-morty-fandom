import React, { Component } from 'react';
import { Query } from 'react-apollo';

// api
import { QUERY } from '../services/api';

// Components
import { Layout, PageHeader } from 'antd';
import Character from '../components/characters/character';
import EpisodesList from '../components/episodes/EpisodesList';
import Loading from '../components/loading';
import Alert from '../components/alert';


export default class Profile extends Component {
    constructor(props) {
      super(props);

      this.state = {}
    }

    render() {
      return (
        <Query query={QUERY.GET_CHARACTER} variables={{ id: this.props.match.params.id }}>
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
                    { error && <Alert message="Error" description="Intentelo mas tarde. " type="warning" /> }
                    { data && <Character character={ data.character } /> }
                    <br />
                    { data && <EpisodesList episodes={ data.character.episode } /> }
                  </Layout.Content>
                </>
              );
            }
          }
        </Query>
      );
    }
}