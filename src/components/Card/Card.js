import React, { Component } from "react";
import { List, Card, Icon } from "antd";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCourseAction, currentCourseId } from "../../actions/CourseAction";

const { Meta } = Card;

const imgstyle = {
  display: "block",
  margin: "10px 7px 0px 13px",
  width: "90%",
  height: "90%",
  backgroundColor: "white"
};

class classCard extends Component {

  componentDidMount() {
    this.props.dispatch(getCourseAction());
  }

  handleClick = (courseId) => {
    this.props.dispatch(currentCourseId(courseId));
  };

  render() {
    let result = <div>asd</div>;

    try {
      if (this.props.courses.data.length > 0) {
        console.log("get");

        result =
          <div style={{ padding: "30px" }}>
            <List
              grid={{ gutter: 32, column: 4 }}
              dataSource={this.props.courses.data}
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
                      <a onClick={() => this.handleClick(item.id)} >
                        <Link to="/docs">
                          <Icon type="book" style={{ fontSize: 32 }} />Docs
                    </Link>
                      </a>,
                      <a onClick={() => this.handleClick(item.id)}>
                        <Link to="/discuss">
                          <Icon type="team" style={{ fontSize: 32 }} />Discuss
                  </Link>
                      </a>
                    ]}
                  >
                    <Meta title={item.course_name} description={item.course_info} />
                  </Card>
                </List.Item>
              )}
            />
          </div>
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
  let { currentCourse } = state.Course;

  return {
    courses,
    currentCourse
  }
}

classCard = connect(mapStateToProps)(classCard);

export default classCard;
