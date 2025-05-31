
import '../App.css';
import Searchbar from '../components/Searchbar';
import TrendingKeywords from '../components/TrendingKeywords';
import Layout from '../layout/Layout';
import NewsTicker from '../components/NewsTicker';

const Home = () => {

  return (
      <Layout>
      <Searchbar></Searchbar>
      <TrendingKeywords></TrendingKeywords>
        <h2 style={{ marginLeft: '40px' }}>📰 함께하는 언론사</h2>
        <NewsTicker />
      </Layout>
     );
};

export default Home;
