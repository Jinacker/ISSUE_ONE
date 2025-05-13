import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IssueCard from '../components/IssueCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      nav(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <h1>ISSUE ONE</h1>

      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="어떤 이슈가 궁금하신가요?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      <div>
        <button>신문사 필터링</button>
        <button>관심사 필터링</button>
      </div>

      <h3>추천 이슈</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <IssueCard title="이슈 1" />
        <IssueCard title="이슈 2" />
        <IssueCard title="이슈 3" />
      </div>

      <h3>핫한 이슈</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <IssueCard title="이슈 1" />
        <IssueCard title="이슈 2" />
        <IssueCard title="이슈 3" />
      </div>
    </div>
  );
};

export default Home;
