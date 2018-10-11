import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
class Title extends Component {
  static defaultProps = {
    wordings: '',
    onSubmit: Function
  }
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  alertClickOnTitle () {
      if(this.props.onSubmit){
        this.props.onSubmit('1231232')
      }
  }
  handleClickOnTitle (event) {
     console.log(this)
      this.setState((prevState)=>{
        return { isLiked: !prevState.isLiked }
      })
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <WingBlank>
          <Button activeStyle={false}>default2323</Button><WhiteSpace />
          <Button type="primary">primary</Button>
        </WingBlank>
        <div>
          {this.state.isLiked ? <h1 onClick={this.alertClickOnTitle.bind(this)}>好书</h1> : <h1>假书</h1>}
        </div>
        
        <div onClick={this.handleClickOnTitle.bind(this)}>{this.props.wordings}</div>
      </div>
      
    )
  }
}


export default Title;