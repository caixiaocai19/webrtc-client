import * as React from 'react'
import './app.less'
import RouteConfig from "@/routes/index";
import Count from './components/Count';
class App extends React.Component{
  render(){
    return (
      <div>
        <Count></Count>
        <RouteConfig></RouteConfig>
      </div>
    )
  }
}

export default App