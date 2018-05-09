import React, { Component } from "react";
import { List, Avatar, Input, Row, Col } from "antd";
import { connect } from "react-redux";
import { getDocsAction } from "../actions/DocsAction";

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

  componentDidMount() {
    this.props.dispatch(getDocsAction(this.props.currentCourse));
  }

  render() {
    console.log(this.props);

    let result = <div>123</div>;

    try {
      if (this.props.docs.data.length > 0) {
        console.log("get");
        result =
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
              dataSource={this.props.docs.data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size="large" icon="file" />}
                    title={<a href="">{item.material_filename}</a>}
                  />
                </List.Item>
              )}
            />
          </div>
      }
      else {
        //no docs
        console.log("no docs");
      }
    }
    catch (e) {
      console.log("connecting");

    }


    return result;
  }
}

const mapStateTopProps = (state) => {
  let { currentCourse } = state.Course;
  //console.log(state);
  let { docs } = state.Docs;
  return {
    currentCourse,
    docs
  }
}

DocsPage = connect(mapStateTopProps)(DocsPage);

export default DocsPage;
