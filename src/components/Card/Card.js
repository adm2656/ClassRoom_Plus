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
  display: 'block',
  margin: "auto",
  width: '80%',
  height: '80%',
  backgroundColor: 'white',
};

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
                cover={<img alt="book" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJ1vyXuMkXQ5y2iAcua_mfAHeAVTmUmAWZHyi783AINXYG0c0" style={imgstyle}/>}
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
