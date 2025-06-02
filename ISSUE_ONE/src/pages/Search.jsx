import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // ✅ 중요
import Layout from '../layout/Layout';
import './Search.css';
import { newsLogos } from '../utils/newsLogos';
import TrendingKeywords from '../components/TrendingKeywords';

// 정치 성향 리스트
const conservativeSources = [
  "조선일보", "중앙일보", "동아일보", "문화일보", "국민일보", "뉴데일리", "독립신문",
  "데일리안", "한국논단", "뉴스라이브", "아시아투데이", "cnb뉴스", "브레이크뉴스",
  "데일리NK", "쿠키뉴스", "연합뉴스", "YTN", "한국경제", "매일경제", "서울경제", "헤럴드경제"
];

const progressiveSources = [
  "오마이뉴스", "한겨레", "프레시안", "경향신문", "딴지일보", "시사in", "미디어오늘",
  "노컷뉴스", "머니투데이", "이데일리", "레디앙", "미디어스", "민중의 소리"
];

const neutralSources = [
  "서울신문", "한국일보", "내일신문", "뉴시스", "파이낸셜뉴스"
];

const getStanceBySource = (source) => {
  if (conservativeSources.includes(source)) return "conservative";
  if (progressiveSources.includes(source)) return "progressive";
  if (neutralSources.includes(source)) return "neutral";
  return "neutral";
};

const Search = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const query = params.get('q');
  const results = location.state?.results;
  const summary = location.state?.conclusion;

  // ✅ 렌더링 직후 최상단으로 스크롤 (진짜 최종 보장)
useEffect(() => {
  const selectors = ['.main', '.wrapper', '.layout', '#root', 'body', 'html'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && el.scrollTop > 0) {
      el.scrollTop = 0;
    }
  });

  window.scrollTo({ top: 0 });
}, []);


  return (
    <Layout>
      <div className="page-wrapper">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          ‘{query}’ 에 대한 요약 정보입니다.
        </h2>

        {/* 📰 기사 요약 카드 */}
        <div className="summary-grid">
          {results?.articles?.map((article, i) => {
            const stance = getStanceBySource(article.source);
            const stanceColor = stance === "conservative"
              ? "#0047AB"
              : stance === "progressive"
              ? "#B22222"
              : "#777";

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
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: stanceColor
                    }}
                    title={stance}
                  ></div>
                  <div style={{
                    fontSize: "0.8rem",
                    marginTop: "0.3rem",
                    color: stanceColor
                  }}>
                    {stance === "conservative"
                      ? "보수"
                      : stance === "progressive"
                      ? "진보"
                      : "중도"}
                  </div>
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
          <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>
            📌 종합 결론
          </h3>

          <div className="conclusion-box" style={{
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1.5rem',
            lineHeight: '1.8',
            fontSize: '1.05rem',
            whiteSpace: 'pre-wrap'
          }}>
            {(!results?.articles || results.articles.length === 0) ? (
              <p style={{ color: '#666', textAlign: 'center' }}>
                검색 결과를 찾을 수 없습니다. <br />
                다른 키워드로 다시 검색해보세요.
              </p>
            ) : (
              <>
                <div style={{ marginBottom: '1.2rem' }}>
                  <strong>1. 핵심 사실</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>
                    {summary?.fact || '정보 없음'}
                  </p>
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <strong>2. 공통 쟁점</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>
                    {summary?.issue || '정보 없음'}
                  </p>
                </div>
                <div>
                  <strong>3. 향후 전망</strong>
                  <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>
                    {summary?.outlook || '정보 없음'}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 🔍 추천 키워드 */}
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.3rem',
          marginTop: '3rem'
        }}>
          🔍 다른 이슈는 어때요?
        </h2>
        <TrendingKeywords />
      </div>
    </Layout>
  );
};

export default Search;
