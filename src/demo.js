import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
	// 我们把 React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载。
	
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	}
	
	// 组件挂载开始之前
	componentWillMount() {

	}

	// 组件挂载完成以后
	componentDidMount() {

  	}

  	// 组件对应的 DOM 元素从页面中删除之前调用
	componentWillUnmount() {

	}
	

	render() {
	    return (

	    )
	}
}

// ReactDOM.render(
//   <Demo />,
//   document.getElementById('root')
// );