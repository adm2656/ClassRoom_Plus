import React, { Component } from "react";
import { List, Avatar, Input, Row, Col } from "antd";

const Search = Input.Search;

const data = [
  {
    title: "Docs 1",
    description: "Docs"
  },
  {
    title: "Docs 2",
    description: "Docs"
  },
  {
    title: "Docs 3",
    description: "Docs"
  },
  {
    title: "Docs 4",
    description: "Docs"
  }
];

class DocsPage extends Component {
  render() {
    return (
      <div class="file">
        <List
          header={
            <Row>
              <Col span={6} offset={17}>
                <Search
                  placeholder="Keyword"
                  onSearch={value => console.log(value)}
                  style={{ width: 200, marginLeft: 0 }}
                  enterButton
                />
              </Col>
            </Row>
          }
          bordered
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar size="large" icon="file" />}
                title={<a href="">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default DocsPage;
