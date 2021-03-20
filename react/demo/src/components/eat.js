import React, {Component, Fragment} from 'react'
// import PropTypes from 'prop-types'
import '../style/eat.css'
import EatItem from './eatItem'
import axios from 'axios'

class Eat extends Component {
  // 构造函数定义属性
  constructor(props) {
    super(props)   // 继承父级的方法
    this.state = {
      inputVal: 'hello',
      list: ['宫爆鸡丁']
    }
  }

  inputChange() {
    // console.log(e.target.value);
    // inputChange 在jsx中调用，this指向不是Eat，为undefined
    // react 是单向数据流
    // this.state.inputVal = e.target.value
    
    this.setState({   // 给数据源赋值
      // inputVal: e.target.value
      inputVal: this.input.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputVal]
    })
  }

  componentDidMount() {   // 接口请求一般放在这个生命周期函数
    // axios.get('https://m.maoyan.com/ajax/movieOnInfoList')
    //   .then((res) => {
    //     console.log(res);
    //   })
  }

  deleteItem(index) {
    // console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render() {
    return (  // jsx
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜：</label>  label标签自带的for标签会报错 */}
          {/* a bind b，把a的this指向b */}
          <input id="addGoods" 
            className="input" 
            value={this.state.inputVal} 
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input = input}}
            ></input>
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // dangerouslySetInnerHTML：解析html文本  第一层{}是js，第二层{}是html
              // {/* return <li key={index+item} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li> */}

              return (
                <div key={index+item}>
                  {/* 父组件向子组件传递内容，靠属性来传递 */}
                  <EatItem content={item} index={index} list={this.state.list} deleteItem={this.deleteItem.bind(this)} key={index+item}></EatItem>
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Eat