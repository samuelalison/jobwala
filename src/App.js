import './App.css';
import { Footer, Trending, Hiring, Manage, Dream, Trusted, Header } from './containers';
import { Navbar} from './components';

function App() {
  return (
    <div className="App">
      <div className='bg'>
        <div className='bg-color'>
      <Navbar />
      <Header />
      </div>
      </div>
      <Trending />
      <Hiring />
      <Manage />
      <Dream />
      {/* <Trusted /> */}
      <Footer />
    </div>
  );
}

export default App;
