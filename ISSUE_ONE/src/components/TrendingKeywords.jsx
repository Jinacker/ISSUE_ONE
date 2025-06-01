import React from 'react';
import './TrendingKeywords.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const dummyKeywords = [
  { keyword: "대선", count: 14 },
  { keyword: "투표", count: 12 },
  { keyword: "후보", count: 10 },
  { keyword: "네이버", count: 8 },
  { keyword: "관리", count: 7 }
];

const TrendingKeywords = () => {
  const keywords = dummyKeywords;
  const navigate = useNavigate();
  const maxCount = Math.max(...keywords.map(k => k.count), 1);

  const handleClick = async (kw) => {
    try {
      const res = await axios.get('https://ai-api-1w85.onrender.com/search-articles', {
        params: { keyword: kw },
      });

      navigate(`/loading?q=${encodeURIComponent(kw)}`, {
        state: { results: res.data },
      });
    } catch (err) {
      console.error("트렌드 검색 실패:", err);
      alert("검색 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="floating-keywords-wrapper">
      {keywords.map((k, i) => {
        const scale = Math.pow(k.count / maxCount, 2);
        const size = 60 + scale * 90;
        const gray = Math.round(255 - scale * 130);
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${20 + scale * 16}px`,
          backgroundColor: `rgb(${gray}, ${gray}, ${gray})`,
          color: gray < 120 ? '#fff' : '#000',
          animationDelay: `${i * 0.2}s`,
        };

        return (
          <div
            key={i}
            className="floating-keyword"
            style={style}
            onClick={() => handleClick(k.keyword)}
          >
            {k.keyword}
          </div>
        );
      })}
    </div>
  );
};

export default TrendingKeywords;
