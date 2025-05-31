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

  // Layout.jsx가 body에 class="dark"/"light" 붙여주니까 이걸 기준으로 판단
  const isDarkMode = document.body.classList.contains("dark");

  useEffect(() => {
    if (results?.articles?.length > 0 && query) {
      const contents = results.articles.slice(0, 3).map((a) => a.content);
      axios
        .post('https://ai-api-1w85.onrender.com/summarize-conclusion', {
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
    <div className="loading-screen">
      <h2>요약 생성 중입니다... ⏳</h2>
      <p>최대 10초 정도 소요될 수 있어요.</p>
      <SquareLoader
        color={isDarkMode ? "#ffffff" : "#333333"}
        loading={true}
        size={60}
        speedMultiplier={1}
      />
    </div>
  );
};

export default LoadingSearch;
