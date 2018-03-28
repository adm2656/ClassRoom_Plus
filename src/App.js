import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import Docspage from "./components/DocsPage";
import CalendarPage from "./components/CalendarPage";

const { Header, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: "index"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
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
                <NavLink to="/">
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
              <SubMenu
                title={
                  <span>
                    <Icon type="setting" />Navigation Three - Submenu
                  </span>
                }
              >
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="google">
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="google" />
                </a>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Route exact path="/" component={HomePage} />
            <Route path="/docs" component={Docspage} />
            <Route path="/calendar" component={CalendarPage} />
          </Content>
          <Footer>
            Copyright <Icon type="copyright" /> Classroom+. All Right Reserved.
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
