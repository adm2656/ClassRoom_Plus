import React, { Component } from "react";
import { List, Card, Icon } from "antd";

const data = [
  {
    title: "Class 1"
  },
  {
    title: "Class 2"
  },
  {
    title: "Class 3"
  },
  {
    title: "Class 4"
  },
  {
    title: "Class 5"
  },
  {
    title: "Class 6"
  },
  {
    title: "Class 7"
  },
  {
    title: "Class 8"
  }
];

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
                actions={[
                  <Icon type="setting" />,
                  <Icon type="edit" />,
                  <Icon type="ellipsis" />
                ]}
                title={item.title}
              >
                info
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default classCard;
