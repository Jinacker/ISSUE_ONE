import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Layout from '../layout/layout';

const Home = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError(true);
    } else {
      setError(false);
      nav(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="page-wrapper">
      <Layout>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={error ? '검색어를 입력해주세요' : '어떤 이슈가 궁금하신가요?'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ borderColor: error ? 'red' : '#ccc' }}
        />
        <button type="submit">검색</button>
      </form>
      </Layout>
    </div>
  );
};

export default Home;
