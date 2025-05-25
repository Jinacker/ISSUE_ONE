import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 200); // 자연스러운 진입 애니메이션
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError(true); // 공백만 입력하면 에러
    } else {
      setError(false);
      nav(`/search?q=${encodeURIComponent(query)}`);
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
        >
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
