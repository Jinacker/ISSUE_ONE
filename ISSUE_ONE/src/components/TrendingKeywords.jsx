import React from 'react';
import './TrendingKeywords.css';
import { useNavigate } from 'react-router-dom';

// 🔹 백엔드 연결 전이므로 더미 데이터 사용
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

  const handleClick = (kw) => {
    navigate(`/search?q=${encodeURIComponent(kw)}`);
  };

  return (
    <div className="floating-keywords-wrapper">
      {keywords.map((k, i) => {
        const scale = Math.pow(k.count / maxCount, 2);  // ✅ 크레센도 효과
        const size = 60 + scale * 90;  // ✅ 전체적으로 큼직하게
        const gray = Math.round(255 - scale * 130); // ✅ 진한 모노톤
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
