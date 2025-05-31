import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import './Search.css';

const Search = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const query = params.get('q');
  const results = location.state?.results;
  const summary = location.state?.conclusion || '요약 정보가 없습니다.';

  const goHome = () => {
    navigate('/');
  };

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
          <div className="conclusion-box">{summary}</div>
        </div>

        <button className="more-button" onClick={goHome}>
          연관 이슈 더보기
        </button>
      </div>
    </Layout>
  );
};

export default Search;
