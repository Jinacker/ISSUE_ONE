import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TrendingKeywords.css';

const TrendingKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://ai-api-1w85.onrender.com/trending-keywords')
      .then((res) => {
        const data = res.data.keywords || [];

        // fontSize, 위치 계산
        const counts = data.map(k => k.count);
        const min = Math.min(...counts);
        const max = Math.max(...counts);

        const scaled = data.map(k => {
          const size = max === min
            ? 32
            : 16 + ((k.count - min) / (max - min)) * 32;
          return {
            ...k,
            fontSize: size,
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`
          };
        });

        setKeywords(scaled);
      })
      .catch((err) => {
        console.error('추천 키워드 불러오기 실패:', err);
      });
  }, []);

  const handleClick = (kw) => {
    navigate(`/search?q=${encodeURIComponent(kw)}`);
  };

  return (
    <div className="floating-keywords-container">
      {keywords.map((kw, idx) => (
        <div
          key={idx}
          className="floating-keyword"
          onClick={() => handleClick(kw.keyword)}
          style={{
            fontSize: `${kw.fontSize}px`,
            top: kw.top,
            left: kw.left
          }}
        >
          {kw.keyword}
        </div>
      ))}
    </div>
  );
};

export default TrendingKeywords;
