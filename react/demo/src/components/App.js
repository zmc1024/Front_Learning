// 老版本手法编写
import React, {Component} from 'react'

class App extends Component{
  render() {
    return (  // jsx = js + XML
      <ul className="items">
        <li>vue</li>
        <li>{false ? 'react' : 'REACT'}</li>
      </ul>
    )
  }
}

export default App