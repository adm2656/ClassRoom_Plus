import React, { Component}  from 'react';
import Calendar from "./Calendar/Calendar";
import "./Calendar/Calendar.css";

class CalendarPage extends Component{
    render(){
        return(
            <div class="calendar">
            <Calendar />
            </div>
        );
    }
}

export default CalendarPage;