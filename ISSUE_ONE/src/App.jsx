/* eslint-disable no-unused-vars */

import {Routes, Route, Link, useNavigate} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Loading from './pages/Loading'
import Search from './pages/Search'
import Notfound from './pages/Notfound'

// 라우터 구성

function App() {

  const nav = useNavigate(); // navigation 함수 생성 => 원하는 페이지로 이동가능

  const onClickButton = () => { // 이벤트 핸들러 생성 
    nav("/search");
  }

  return (
    <>
    <div>
      <Link to = {"/"}>Home</Link>
      <Link to = {"/load"}>Load</Link>
      <Link to = {"/search"}>Search</Link>
    </div>
    <button onClick ={onClickButton}>Search 페이지로 이동</button>
    <Routes>
      <Route path = "/" element = {<Home></Home>}></Route>
      <Route path = "/load" element = {<Loading></Loading>}></Route>
      <Route path = "/search" element = {<Search></Search>}></Route>
      <Route path = "*" element = {<Notfound></Notfound>}></Route>
    </Routes>
    </>
  )
}

export default App
