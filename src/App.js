import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './test-zou'

class User extends Component {
  render () {
    const  {item}  = this.props
    console.log(this.props)
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

  onSubmit(value) {
    console.log(value)
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
        <Title wordings="asd" onSubmit={this.onSubmit} />
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
