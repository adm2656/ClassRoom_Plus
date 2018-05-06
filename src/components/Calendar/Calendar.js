import React, { Component } from "react";
import { Calendar, Badge } from "antd";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 10:
      listData = [
        { type: "warning", content: "功課一" },
        { type: "success", content: "小考" }
      ];
      break;
    case 16:
      listData = [
        { type: "warning", content: "功課二" },
        { type: "error", content: "期中考" }
      ];
      break;
    case 22:
      listData = [
        { type: "default", content: "小考" },
        { type: "success", content: "期中報告" },
        { type: "processing", content: "小組報告" }
      ];
      break;
      case 28:
      listData = [
        { type: "warning", content: "期中考" },
      ];
      break;
    case 31:
      listData = [
        { type: "success", content: "期中考" },
        { type: "processing", content: "期中考" }
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 7 || value.month() === 8) {
    return "Summer vacation";
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
    </div>
  ) : null;
}

class studentCalendar extends Component {
  render() {
    return (
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    );
  }
}

export default studentCalendar;
