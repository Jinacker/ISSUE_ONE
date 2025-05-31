import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import './Search.css';
import { newsLogos } from '../utils/newsLogos';
import TrendingKeywords from '../components/TrendingKeywords';

const Search = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const query = params.get('q');
  const results = location.state?.results;
  const summary = location.state?.conclusion;

  const goHome = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className="page-wrapper">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          ‘{query}’ 에 대한 요약 정보입니다.
        </h2>

        {/* 📰 기사 요약 카드 */}
        <div className="summary-grid">
  {results?.articles?.map((article, i) => {
    const stance = article.stance; // 예: "conservative", "progressive", "neutral"
    const stanceColor = stance === "conservative"
      ? "#0047AB" // 보수: 파랑
      : stance === "progressive"
      ? "#B22222" // 진보: 빨강
      : "#777";   // 중립 또는 정보 없음

    return (
      <div className="summary-box" key={i}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "15px"
        }}>
          <img
            src={newsLogos[article.source] || "/logos/default.png"}
            alt={article.source}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              marginBottom: "5px"
            }}
          />
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: stanceColor
          }} title={stance}></div>
        </div>

        <h4 style={{ whiteSpace: 'pre-wrap' }}>{article.title}</h4>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{article.summary}</p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-button"
        >
          원문 보기 →
        </a>
      </div>
    );
  })}
</div>

{/* 📌 종합 결론 */}
<div className="summary-conclusion">
  <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>📌 종합 결론</h3>
  
  <div className="conclusion-box" style={{
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    lineHeight: '1.8',
    fontSize: '1.05rem',
    whiteSpace: 'pre-wrap'
  }}>
    <div style={{ marginBottom: '1.2rem' }}>
      <strong>1. 핵심 사실</strong>
      <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>{summary?.fact || '정보 없음'}</p>
    </div>
    <div style={{ marginBottom: '1.2rem' }}>
      <strong>2. 공통 쟁점</strong>
      <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>{summary?.issue || '정보 없음'}</p>
    </div>
    <div>
      <strong>3. 향후 전망</strong>
      <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>{summary?.outlook || '정보 없음'}</p>
    </div>
  </div>
  </div>
          <h2 style={{
          textAlign: 'center',
          fontSize: '1.3rem',
          marginTop: '3rem'
          }}>
        🔍 다른 이슈는 어때요?
        </h2>
        <TrendingKeywords></TrendingKeywords>
      </div>
    </Layout>
  );
};

export default Search;
