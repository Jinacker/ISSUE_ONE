
import '../App.css';
import Searchbar from '../components/Searchbar';
import TrendingKeywords from '../components/TrendingKeywords';
import Layout from '../layout/Layout';
import NewsTicker from '../components/NewsTicker';

const Home = () => {

  return (
      <Layout>
      <Searchbar></Searchbar>
          <h2 style={{
          textAlign: 'center',
          fontSize: '1rem',
          margin: '1rem 0'
          }}>
        🔍 지금 가장 많이 언급된 키워드
        </h2>
        <TrendingKeywords></TrendingKeywords>
        <h3 style={{ marginLeft: '40px' }}>📰 함께하는 언론사</h3>
        <NewsTicker />
      </Layout>
     );
};

export default Home;
