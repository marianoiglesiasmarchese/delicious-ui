import React from "react";
import { Link } from "react-router-dom";

import Router from "../Router";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";

class App extends React.Component {
  
  appName = "Delicious";

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title={this.appName} scroll>
            <Navigation>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/about">About</Link>
            </Navigation>
          </Header>
          <Drawer title={this.appName}>
            <Navigation>
              <Link to="/">Link</Link>
              <Link to="/">Link</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/about">About</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Router />
            </div>
          </Content>
          <Footer size="mini">
            <FooterSection type="left" logo="footer">
              <FooterLinkList>
                <Link to="/">Contact</Link>
                <Link to="/">Privacy & Terms</Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
