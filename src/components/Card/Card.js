import React, { Component } from "react";
import { List, Card, Icon } from "antd";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCourseAction } from "../../actions/CourseAction";

const { Meta } = Card;

const imgstyle = {
  display: 'block',
  margin: '10px 7px 0px 13px',
  width: '90%',
  height: '90%',
  backgroundColor: 'white',
};

class classCard extends Component {

  componentDidMount() {
    this.props.dispatch(getCourseAction());
  }

  render() {
    let result=<div>asd</div>;

    try {
      if (this.props.courses.data.length > 0) {

        console.log("get");
        
        result =
          <div style={{ padding: "30px" }}>
            <List
              grid={{ gutter: 32, column: 4 }}
              dataSource={this.props.courses.data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    cover={<img alt="book" src="https://image.flaticon.com/icons/svg/201/201614.svg" style={imgstyle} />}
                    actions={[
                      <Link to="/docs">
                        <Icon type="copy" style={{ fontSize: 32 }} />DOCS
                      </Link>
                    ]}
                  >
                    <Meta
                      title={item.course_name}
                      description={item.course_info}
                    />
                  </Card>
                </List.Item>
              )}
            />
          </div>;
      }
      else {
        //no courses
        console.log("no courses");
      }
    }
    catch (e) {
      console.log("connecting");
    }

    return result;
  }
}

const mapStateToProps = (state) => {
  let { courses } = state.Course;
  return {
    courses
  }
}

classCard = connect(mapStateToProps)(classCard);

export default classCard;
