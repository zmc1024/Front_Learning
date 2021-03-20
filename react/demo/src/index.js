import React from 'react'
import ReactDom from 'react-dom'
// import App from './components/App'
import Eat from './components/eat'

/**
 * 两个参数：
 *    第一个：接收哪个组件，第二个：挂载到哪
 */
ReactDom.render(<Eat />, document.getElementById('root'))
