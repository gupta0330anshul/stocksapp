
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';

function App() {
  return (


    <Router>
    <Header />
     <main className='py-3'>

      <Routes>
      <Route path='/' Component={HomeScreen} />
      <Route path='/:name' Component={HomeScreen} />
      </Routes>

     </main>
      <Footer />
    </Router>

  );
}

export default App;
