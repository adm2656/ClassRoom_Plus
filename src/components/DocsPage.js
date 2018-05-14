import React, { Component } from "react";
import { List, Avatar, Input, Row, Col, notification, Icon } from "antd";
import { connect } from "react-redux";
import { getDocsAction, docsSearchAction, docsSearchEnd } from "../actions/DocsAction";

const Search = Input.Search;

class DocsPage extends Component {

  componentDidMount() {
    this.props.dispatch(getDocsAction(this.props.currentCourse));
  }

  render() {
    let result = <div>123</div>;

    try {
      if (this.props.docs.data.length > 0) {
        console.log("get");

        if (this.props.Search.keyword !== undefined) {
          for (let i = 0; i < this.props.Search.result.pages.length; i++) {
            successNotification(this.props.Search.result.pages[i].filename, "page: " + this.props.Search.result.pages[i].page);
          }
          this.props.dispatch(docsSearchEnd());
        }

        result =
          <div class="file">
            <List
              header={
                <Row>
                  <Col span={6} offset={17}>
                    <Search
                      placeholder="Keyword"
                      onSearch={value => this.props.dispatch(docsSearchAction(this.props.currentCourse, value))}
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
                    title={<a target="_blank" href={item.material_directory} >{item.material_filename}</a>}
                  />
                </List.Item>
              )}
            />
          </div>;
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

const successNotification = (mes, des) => {
  notification.success({
    message: mes,
    description: des,
    icon: <Icon type="tags" />,
    placement: 'bottomRight',
  });
};

const mapStateTopProps = (state) => {
  let { currentCourse } = state.Course;
  let { docs } = state.Docs;
  let { Search } = state;
  return {
    currentCourse,
    docs,
    Search
  }
}

DocsPage = connect(mapStateTopProps)(DocsPage);

export default DocsPage;
