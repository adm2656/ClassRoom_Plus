import React, { Component } from "react";
import { List, Card, Icon } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Class 1",
    info: "test"
  },
  {
    title: "Class 2",
    info: "test"
  },
  {
    title: "Class 3",
    info: "test"
  },
  {
    title: "Class 4",
    info: "test"
  },
  {
    title: "Class 5",
    info: "test"
  }
];

const { Meta } = Card;

const imgstyle = {
  display: "block",
  margin: "10px 7px 0px 13px",
  width: "90%",
  height: "90%",
  backgroundColor: "white"
};

class classCard extends Component {
  handleClick = () => {
    console.log("test");
  };

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <List
          grid={{ gutter: 32, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                    alt="book"
                    src="https://image.flaticon.com/icons/svg/201/201614.svg"
                    style={imgstyle}
                  />
                }
                actions={[
                  <a onClick={this.handleClick}>
                    <Link to="/docs">
                      <Icon type="book" style={{ fontSize: 32 }} />Docs
                    </Link>
                  </a>,
                  <a onClick={this.handleClick}>
                  <Link to="/discuss">
                    <Icon type="team" style={{ fontSize: 32 }} />Discuss
                  </Link>
                  </a>
                ]}
              >
                <Meta title={item.title} description={item.info} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default classCard;
