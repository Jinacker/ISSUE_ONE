import { useSearchParams, useNavigate } from 'react-router-dom';
import '../App.css';
import Layout from '../layout/Layout';

const Search = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const query = params.get('q');

  const goHome = () => {
    navigate('/');
  };

  return (

    <Layout>
    <div className="page-wrapper">

      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        ‘{query}’ 에 대한 조사 결과입니다.
      </h2>

      {/* 신문사 요약 */}
      <div className="summary-grid">
        <div className="summary-box">
          <h3>신문사 A</h3>
          <p>기사 요약</p>
        </div>
        <div className="summary-box">
          <h3>신문사 B</h3>
          <p>기사 요약</p>
        </div>
        <div className="summary-box">
          <h3>신문사 C</h3>
          <p>기사 요약</p>
        </div>
      </div>

      {/* 결론 */}
      <div className="summary-conclusion">
        <h3>총 결론은 ...</h3>
        <div className="conclusion-box">
          신문사 비교 분석한 객관적인 결론
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
