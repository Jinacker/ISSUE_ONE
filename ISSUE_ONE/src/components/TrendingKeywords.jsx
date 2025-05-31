import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TrendingKeywords.css'; // optional

const TrendingKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://ai-api-1w85.onrender.com/trending-keywords')
      .then((res) => {
        setKeywords(res.data.keywords || []);
      })
      .catch((err) => {
        console.error('추천 키워드 불러오기 실패:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (kw) => {
    navigate(`/search?q=${encodeURIComponent(kw)}`);
  };

  return (
    <div className="trending-keywords-wrapper">
      <h3>🔥 지금 인기 있는 키워드</h3>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div className="keyword-list">
          {keywords.map((kw, idx) => (
            <button key={idx} className="keyword-btn" onClick={() => handleClick(kw)}>
              {kw}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingKeywords;
