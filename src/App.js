import './scss/App.scss';
import Hero from '../src/components/Hero/Hero'
import Info from './components/Info/Info';

function App() {
  return (
    <div className="wrapper">
      <div className='content'>
        <Hero />
        <Info />
      </div>
      <div className='container'>
      </div>
    </div>
  );
}

export default App;
