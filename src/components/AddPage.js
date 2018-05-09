import React, { Component } from "react";
import AddForm from "./AddForm/AddForm";
import "./AddForm/AddForm.css"

class AddPage extends Component {
    render() {
      return (
        <div class="add">
          <AddForm />
        </div>
      );
    }
  }
  
  export default AddPage;