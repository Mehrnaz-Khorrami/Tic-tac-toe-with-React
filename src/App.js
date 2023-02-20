import React, { useState } from 'react';
import Square from './components/Square';
import './App.css';

function App() {

  const [state, setState] = useState({
    player: 'CIRCLE',
    positions : [
      'EMPTY','EMPTY','EMPTY',
      'EMPTY','EMPTY','EMPTY',
      'EMPTY','EMPTY','EMPTY'
    ]
  })

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === 'CIRCLE' ? 'CROSS' : 'CIRCLE',
      positions,
    });
  }

  return (
    <div className="app">
      <div className='grid'>
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
    </div>
  );
}

export default App;
