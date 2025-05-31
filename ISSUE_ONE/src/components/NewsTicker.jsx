import './NewsTicker.css';
import { newsLogos } from '../utils/newsLogos';

const NewsTicker = () => {
  const entries = Object.entries(newsLogos);
  const fullLogos = [...entries, ...entries,...entries]; // 2배 복제

  return (
    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">
        {fullLogos.map(([source, logo], idx) => (
          <div className="logo-container" key={idx}>
            <img src={logo} alt={source} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
