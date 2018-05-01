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

class classCard extends Component {
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
                cover={<img alt="book" src="http://mtc.ntnu.edu.tw/upload_files/icon/training.png" />}
                actions={[
                  <Link to="/docs">
                  <Icon type="copy" style={{fontSize:32}}/>
                  </Link>
                ]}
              >
                <Meta
                title={item.title}
                description={item.info}
                 />
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default classCard;
