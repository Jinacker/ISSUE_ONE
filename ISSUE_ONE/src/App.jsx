/* eslint-disable no-unused-vars */
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Loading from './pages/Loading'
import Search from './pages/Search'
import Notfound from './pages/Notfound'

// 라우터 구성

function App() {

  return (
    <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
      <Route path = "/load" element = {<Loading></Loading>}></Route>
      <Route path = "/search" element = {<Search></Search>}></Route>
      <Route path = "*" element = {<Notfound></Notfound>}></Route>
    </Routes>
  )
}

export default App
