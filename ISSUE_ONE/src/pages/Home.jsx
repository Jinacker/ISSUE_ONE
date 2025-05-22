import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AiOutlineSmile } from 'react-icons/ai';
import Header from '../components/Header';

const pressOptions = ['조선일보', '한겨레', '중앙일보', '경향신문', '한국일보'];
const categoryOptions = ['정치', '경제', '사회', '국제', 'IT', '문화', '스포츠'];

const Home = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [showPress, setShowPress] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedPress, setSelectedPress] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const nav = useNavigate();

  const toggleSelect = (option, list, setList) => {
    setList(
      list.includes(option) ? list.filter((o) => o !== option) : [...list, option]
    );
  };

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
    <>
      <div className="page-wrapper">
        <h1 className="logo-title">ISSUE ONE</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={error ? '검색어를 입력해주세요' : '어떤 이슈가 궁금하신가요?'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ borderColor: error ? 'red' : '#ccc'}}
          />
          <button type="submit">검색</button>
        </form>

        <div className="filter-wrapper">
          <div className="filter-box">
            <button onClick={() => setShowPress(!showPress)}>신문사 필터링</button>
            {showPress && (
              <div className="filter-dropdown">
                {pressOptions.map((p) => (
                  <label key={p}>
                    <input
                      type="checkbox"
                      checked={selectedPress.includes(p)}
                      onChange={() => toggleSelect(p, selectedPress, setSelectedPress)}
                    />{' '}
                    {p}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-box">
            <button onClick={() => setShowCategory(!showCategory)}>관심사 필터링</button>
            {showCategory && (
              <div className="filter-dropdown">
                {categoryOptions.map((c) => (
                  <label key={c}>
                    <input
                      type="checkbox"
                      checked={selectedCategory.includes(c)}
                      onChange={() => toggleSelect(c, selectedCategory, setSelectedCategory)}
                    />{' '}
                    {c}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <h2 className="section-title">추천 이슈</h2>
        <div className="issue-grid">
          {['이슈 1', '이슈 2', '이슈 3'].map((title) => (
            <div key={title} className="issue-card">
              {title}
            </div>
          ))}
        </div>

        <h2 className="section-title">핫한 이슈</h2>
        <div className="issue-grid">
          {['이슈 1', '이슈 2', '이슈 3'].map((title) => (
            <div key={title} className="issue-card">
              {title}
            </div>
          ))}
        </div>
      </div>

      <footer style={{ marginLeft: '25px' }} className="footer">
        All rights reserved.<AiOutlineSmile/>
      </footer>
    </>
  );
};

export default Home;
