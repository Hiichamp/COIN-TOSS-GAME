import React, { useState } from 'react';
import heads from './img/heads.png';
import tails from './img/tails.png';

function App() {
  const [result, setResult] = useState('');
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => {
      const random = Math.random();
      setResult(random < 0.5 ? 'Heads' : 'Tails');
      setSpinning(false);
    }, 1000); // Duration of the spin animation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Indian Coin Toss Game</h1>
      <button
        onClick={handleClick}
        className="bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-lg md:text-xl hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
      >
        Flip Coin
      </button>
      <div className="mt-8">
        <img
          src={result === 'Heads' ? heads : tails }
          alt="Coin"
          className={`w-24 h-24  md:w-32 md:h-32 ${spinning ? 'animate-spin' : ''}`}
        />
      </div>
      {result && !spinning && (
        <div className="mt-8 text-2xl md:text-3xl font-bold text-white">
          Result: {result}
        </div>
      )}
    </div>
  );
}

export default App;
