import React, { useState } from 'react';
import './App.css';

function Fibonacci() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  const [z, setZ] = useState(2);
  const [sequence, setSequence] = useState([]);

  function generateSequence() {
    const fib = [1, 1];
    for (let i = 2; i < x; i++) {
      const prevY = fib[i - y] || 1;
      const prevZ = fib[i - z] || 1;
      fib.push(prevY + prevZ);
    }
    setSequence(fib);
  }

  return (
    <div className="container">
      <h2>Fibonacci</h2>
      <label style={{ display: 'block' }}>
        X:
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
      </label>
      <label style={{ display: 'block' }}>
        Y:
        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
      </label>
      <label style={{ display: 'block' }}>
        Z:
        <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
      </label>
      <button style={{ display: 'block', marginTop: '10px', margin: '0 auto'  }} onClick={generateSequence}>
        Generate Sequence
      </button>
      {sequence.length > 0 && <div>{sequence.join(', ')}</div>}
    </div>
  );
}

export default Fibonacci;
