import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const res = await axios.get(
        'https://ai-api-1w85.onrender.com/search-articles', 
        {
          params: { keyword: query },
        }
      );

      console.log("검색 결과:", res.data);

      nav(`/search?q=${encodeURIComponent(query)}`, {
        state: { results: res.data },
      });

    } catch (err) {
      console.error("검색 요청 실패:", err);
      alert("검색 요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-scope">
      <h2>어떤 이슈가 궁금하신가요?</h2>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className={isActive ? "active" : ""}
          style={{ borderColor: error ? "red" : undefined }}
          placeholder="... 키워드를 입력해주세요."
        />
        <button
          type="submit"
          className={`search-btn ${isActive ? "active" : ""}`}
          disabled={loading}
        >
          <span>{loading ? "검색 중..." : "Search"}</span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
