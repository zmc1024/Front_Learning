import React, { Component } from 'react'

class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {  // 只在页面刷新的时候执行一次   1
    console.log('componentWillMount---组件将要挂载到页面');
  }

  componentDidMount() {   // 只在页面刷新的时候执行一次   3
    console.log('componentDidMount---组件挂载完成');
  }

  shouldComponentUpdate(nextProps, nextState) {   // 组件发生改变之前执行   4
    console.log('shouldComponentUpdate---组件发生改变之前执行');
    if(nextProps.content !== this.props.content) {  // 解决子组件无意义渲染问题
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {   // 5
    console.log('componentWillUpdate---组件更新之前执行');
  }

  componentDidUpdate() {    // 7
    console.log('componentDidUpdate---组件更新完成');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount---卸载');
  }

  render() {    // 数据源发生变化就会重新执行   2   6
    console.log('render---组件挂载中');
    return ( 
      // this.props...接收父组件传的数据
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }

  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
    // this.props.list = []
  }
}
 
export default EatItem;