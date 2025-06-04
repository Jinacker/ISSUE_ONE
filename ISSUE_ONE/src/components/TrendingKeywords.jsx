import React, { useEffect, useState } from 'react';
import './TrendingKeywords.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TrendingKeywords = () => {
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const res = await axios.get('https://ai-news-api-fmph.onrender.com/trending-keywords');
        setKeywords(res.data.keywords || []);
      } catch (err) {
        console.error("키워드 로딩 실패:", err);
        alert("추천 키워드를 불러오는 데 실패했습니다.");
      }
    };

    fetchKeywords();
  }, []);

  if (keywords.length === 0) return <div>🔄 추천 키워드 불러오는 중...</div>;

  const handleClick = async (kw) => {
    try {
      const res = await axios.get('https://ai-news-api-fmph.onrender.com/search-articles', {
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
        // 회색조 그라데이션: 어두운 회색 → 연한 회색
        const gray = 80 + Math.round((i / keywords.length) * 100); // 80~180
        const style = {
          width: `110px`,
          height: `110px`,
          fontSize: `24px`,
          backgroundColor: `rgb(${gray}, ${gray}, ${gray})`,
          color: gray < 130 ? '#fff' : '#000',
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
