import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SquareLoader } from 'react-spinners';
import './LoadingSearch.css';

const LoadingSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q');
  const results = location.state?.results;

  const isDarkMode = document.body.classList.contains("dark");

  useEffect(() => {
    // ✅ 1. 검색 결과가 없으면 2초 기다렸다가 바로 이동
    if ((!results || results.articles.length === 0) && query) {
      setTimeout(() => {
        navigate(`/search?q=${encodeURIComponent(query)}`, {
          state: {
            results: { articles: [] },
            conclusion: "검색 결과가 없습니다.",
          },
        });
      }, 1000);
      return;
    }

    // ✅ 2. 결과 있으면 요약 요청
    if (results?.articles?.length > 0 && query) {
      const contents = results.articles.slice(0, 3).map((a) => a.content);
      axios
        .post('https://ai-news-api-fmph.onrender.com/summarize-conclusion', {
          keyword: query,
          contents,
        })
        .then((res) => {
          navigate(`/search?q=${encodeURIComponent(query)}`, {
            state: {
              results,
              conclusion: res.data.summary,
            },
          });
        })
        .catch(() => {
          navigate(`/search?q=${encodeURIComponent(query)}`, {
            state: {
              results,
              conclusion: '결론 요약에 실패했습니다.',
            },
          });
        });
    }
  }, [results, query]);

  return (
    <div
      className="loading-screen"
      style={{
        backgroundColor: isDarkMode ? "#1B1D25" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h2>요약 생성 중입니다... ⏳</h2>
      <SquareLoader
        color={isDarkMode ? "#ffffff" : "#333333"}
        loading={true}
        size={60}
        speedMultiplier={1}
      />
      <p>최대 10초 정도 소요될 수 있어요.</p>
    </div>
  );
};

export default LoadingSearch;
