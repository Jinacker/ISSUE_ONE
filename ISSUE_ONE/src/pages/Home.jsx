
import '../App.css';
import Searchbar from '../components/Searchbar';
import Layout from '../layout/layout';

const Home = () => {

  return (
    <div className="page-wrapper">
      <Layout>
      <Searchbar></Searchbar>
      </Layout>
    </div>
  );
};

export default Home;
