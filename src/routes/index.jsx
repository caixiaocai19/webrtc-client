//路由管理页面
import React from 'react';
import About from '@/pages/About';
import Home from '@/pages/home';
import { HashRouter, Routes, Route } from 'react-router-dom';
function RouteConfig(){
    return (
        <HashRouter>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route index element={<About/>} />
            </Routes>
        </HashRouter>
    )
}
export default RouteConfig
