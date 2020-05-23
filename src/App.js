
import React, { Component } from 'react';
import ReactDom from 'react-dom'

import TodoList from './components/todo-list/TodoList.js';
import TodoInput from './components/todoInput/TodoInput.js';
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  state = {
    items: [
      {id: 1, title: "wake up"},
      {id: 2, title: "Make a breakfast"},
      {id: 3, title: "eat a breakfast "},
    ],
    id:1,
    item: "",
    editItem: false
   
  };
  handleChange = (e) =>{
    console.log("Handle change")
  }
  handleSubmit = (e) => {
    console.log("Handle submit")
  } 
  clearList = (e) => {
    console.log("Clear list")
  } 
  handleDelete =(id) => {
    console.log(`Handle delete ${id}` )
  };
  handleEdit = (id) => {
    console.log(`Edit edit ${id}`)
  } 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
            </h3>
            <TodoInput item = {this.state.item} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} editItem = {this.state.editItem}></TodoInput>
            <TodoList items = {this.state.items} clearList= {this.clearList} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit }></TodoList>
          </div>
        </div>
      </div>
    )
  }
}



