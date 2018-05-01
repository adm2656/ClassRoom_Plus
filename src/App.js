import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRouter";
import HomePage from "./components/HomepPage";
import DocsPage from "./components/DocsPage";
import CalendarPage from "./components/CalendarPage";
import LoginPage from "./components/LoginPage";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clickMenu } from "./actions/MenuActions.js";

const { Header, Footer, Content } = Layout;

class App extends Component {

  static propTypes={
    current:PropTypes.string.isRequired
  }

  constructor(props){
    super(props);

  	this.state={
	  	current:"index"
    }
  }
  
  
	handleClick=(e)=>{
    //console.log("click", e);
    const { dispatch } = this.props;
		dispatch(clickMenu(e.key));
	}
  

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="Homepage">
                <NavLink to="/index">
                  <Icon type="bulb" /> Homepage
                </NavLink>
              </Menu.Item>
              <Menu.Item key="docs">
                <NavLink to="/docs">
                  <Icon type="book" /> Docs
                </NavLink>
              </Menu.Item>
              <Menu.Item key="calendar">
                <NavLink to="/calendar">
                  <Icon type="calendar" /> Calendar
                </NavLink>
              </Menu.Item>
              <Menu.Item key="logout">
                <NavLink to="/">
                  <Icon type="logout" />
                  Logout
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute path="/index" component={HomePage} />
            <PrivateRoute path="/docs" component={DocsPage} />
            <PrivateRoute path="/calendar" component={CalendarPage} />
          </Content>
          <Footer>
            Copyright <Icon type="copyright" /> Classroom+. All Right Reserved.
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps=(state)=>{
	return {
		current:state.current
	}
}

App=connect(mapStateToProps)(App);

export default App;
