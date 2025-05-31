import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Layout from '../layout/Layout';
import './Search.css';

const Search = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = params.get('q');
  const results = location.state?.results;

  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (results?.articles?.length > 0 && query) {
      const contents = results.articles.slice(0, 3).map((a) => a.content);

      axios
        .post('https://ai-api-1w85.onrender.com/summarize-conclusion', {
          keyword: query,
          contents,
        })
        .then((res) => {
          setSummary(res.data.summary || '요약 결과가 없습니다.');
        })
        .catch((err) => {
          console.error('요약 요청 실패:', err);
          setSummary('결론 요약에 실패했습니다.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [results, query]);

  return (
    <Layout>
      <div className="page-wrapper">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          ‘{query}’ 에 대한 요약 정보입니다.
        </h2>

        {/* 기사 요약 카드 */}
        <div className="summary-grid">
          {results?.articles?.map((article, i) => (
            <div className="summary-box" key={i}>
              <h3>신문사 {String.fromCharCode(65 + i)}</h3>
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
            </div>
          ))}
        </div>

        {/* 종합 결론 */}
        <div className="summary-conclusion">
          <h3>종합 결론</h3>
          <div className="conclusion-box">
            {loading ? (
            <p>⏳ 결론 생성 중입니다... 최대 10초 정도 소요될 수 있어요.</p>
            ) : (
            <div className="conclusion-box">{summary}</div>
            )}
          </div>
        </div>

        <button className="more-button" onClick={goHome}>
          연관 이슈 더보기
        </button>
      </div>
    </Layout>
  );
};

export default Search;
