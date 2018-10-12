import React, { Component } from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { Router, Route, Link } from 'react-router'
// import { createForm } from 'rc-form';
import logo from './logo.svg';
import './App.css';
import Title from './test-zou'

class User extends React.Component {
  render () {
    // const  item  = this.props.item
    const  {item}  = this.props
    return (
      <div>
        <div>姓名：{item.username}</div>
        <div>年龄：{item.age}</div>
        <div>性别：{item.gender}</div>
        <hr />
      </div>
    )
  }
}

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      defaultValue: 'qwe'
    }
  }
  componentDidMount() {
    console.log(this.inp)
  }
  // 出入子组件的function
  onSubmit(value) {
    console.log(value)
  }

  handleChange(event) {
    console.log(event.target)
    this.setState({defaultValue: event.target.value.toUpperCase()});
  }
  render() {
    const users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React签12</h1>
        </header>
        <div>{this.state.defaultValue}</div>
        <input ref={(input) => {this.inp = input}} value={this.state.defaultValue} onChange={this.handleChange.bind(this)} style={{width: '100%',height: '60px'}} type="text" name="name" />
        <Title wordings="转换按钮" onSubmit={this.onSubmit} />
        <div>{
          users.map((item,i)=>{
            return <User key={i} item={item} />
          })
        }</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
