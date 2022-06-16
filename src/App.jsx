import * as React from 'react'
import './app.less'

class App extends React.Component{
  render(){
    return (
      <div className="red">
        <div>sda</div>
        <div className="blue">牛啊大adfg石锅饭</div>
        <div className="orange">34sd445</div>
        <img src={require("./test.png")} />
      </div>
    )
  }
}

export default App