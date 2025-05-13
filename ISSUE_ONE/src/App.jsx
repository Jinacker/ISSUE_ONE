/* eslint-disable no-unused-vars */

import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineSmile} from "react-icons/ai"; // 리액트 아이콘 

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

   const [query, setQuery] = useState(""); // 검색어 상태

  const onSearchSubmit = (e) => {
    e.preventDefault(); // 기본 폼 전송 막기
    if (query.trim()) {
      nav(`/search?q=${encodeURIComponent(query)}`); // 쿼리스트링 붙여서 이동
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/load" element={<Loading />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
