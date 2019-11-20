import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

// Components
import Side from './components/sider';

// Sections Componets
import Main from './pages/main';
import Profile from './pages/profile';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleToSelectSection = this.handleToSelectSection.bind(this);
  }

  handleToSelectSection(section) {
    return () => {
      this.setState(state => ({
        ...state,
        selected: section
      }));
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Side handle={this.handleToSelectSection} />
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/character/:id" component={Profile} />
            </Switch>
          </BrowserRouter>

          {/* Footer */}
          <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;