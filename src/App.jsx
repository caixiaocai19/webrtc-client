import * as React from 'react'
import './app.less'
import { Button } from 'antd';
import RouteConfig from "@/routes/index";
import Count from './components/Count';
import Layout from '@/layout/index.tsx';
class App extends React.Component{
  render(){
    return (
      <div>
       <Layout/>
      </div>
    )
  }
}

export default App