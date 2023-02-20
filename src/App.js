import Square from './components/Square';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='grid'>
        <Square position={0} />
        <Square position={1} />
        <Square position={2} />
        <Square position={3} />
        <Square position={4} />
        <Square position={5} />
        <Square position={6} />
        <Square position={7} />
        <Square position={8} />
      </div>
    </div>
  );
}

export default App;
