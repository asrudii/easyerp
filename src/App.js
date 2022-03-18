import './styles/index.scss';
import MyNav from './components/organism/MyNav';
import Footer from './components/organism/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import Login from './components/sections/Login';

function App() {
  return (
    <>
      <Login />
      <MyNav />
      <Home />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
