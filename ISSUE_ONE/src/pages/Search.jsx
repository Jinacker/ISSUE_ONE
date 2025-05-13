import { useSearchParams } from 'react-router-dom';
import NewsSummaryBox from '../components/NewsSummaryBox';

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get('q');

  return (
    <div>
      <h1>ISSUE ONE</h1>
      <h2>'{query}'에 대한 조사 결과입니다.</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <NewsSummaryBox press="신문사 A" content="기사 요약 A" />
        <NewsSummaryBox press="신문사 B" content="기사 요약 B" />
        <NewsSummaryBox press="신문사 C" content="기사 요약 C" />
      </div>

      <div>
        <h3>총 결론은 ...</h3>
        <div>신문사 비교 분석한 객관적인 결론</div>
      </div>

      <button>연관 이슈 더보기</button>
    </div>
  );
};

export default Search;
