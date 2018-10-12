import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank, InputItem, List } from 'antd-mobile';
import propTypes from 'prop-types';
import 'antd-mobile/dist/antd-mobile.css';
class Title extends Component {
  static defaultProps = {
    wordings: '',
    onSubmit: Function
  }
  constructor (props) {
    super(props)
    this.state = { 
      isLiked: false,
      changeValueText: ''
    }
  }
  // 组件挂载之后，
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  alertClickOnTitle (event) {

      if(this.props.onSubmit){
        this.props.onSubmit(this.state.changeValueText)
      }
  }
  handleClickOnTitle (value,event) {
      this.setState((prevState)=>{
        return { isLiked: !prevState.isLiked }
      })
  }
  
  changeValueTextFn(value) {
    
    this.setState({changeValueText: value})
  }
  render () {
    return (
      <div>
        <WingBlank>
          <Button activeStyle={false}>default2323</Button><WhiteSpace />
          <Button type="primary">primary</Button>
        </WingBlank>
        <div style={{color: 'red',marginTop: '10px'}}>
          {this.state.isLiked ? <h1 onClick={this.alertClickOnTitle.bind(this)}>好书</h1> : <h1>假书</h1>}
        </div>
        
        <div onClick={this.handleClickOnTitle.bind(this,'传参数')}>{this.props.wordings}</div>
        <List >
          <InputItem
              clear
              defaultValue="123"
              value={this.state.changeValueText}
              placeholder="auto focus"
              onChange={this.changeValueTextFn.bind(this)}
              ref={el => this.autoFocusInst = el}
            >标题</InputItem>
          </List>
      </div>
      
    )
  }
}


export default Title;