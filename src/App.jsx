import * as React from 'react'
import './app.less'
import RouteConfig from "@/routes/index";
class App extends React.Component{
  render(){
    return (
      <div>
        <RouteConfig></RouteConfig>
      </div>
    )
  }
}

export default App