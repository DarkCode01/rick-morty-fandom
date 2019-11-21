import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

// Components
import Header from './components/header';

// Sections Componets
import Main from './pages/main';
import Profile from './pages/profile';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Header />

          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/characters">
                <Redirect to="/" />
              </Route>
              <Route path="/characters/:id" component={Profile} />
            </Switch>

            {/* Footer */}
            <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
          </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;