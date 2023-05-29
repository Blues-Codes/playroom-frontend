import React, { useState, useRef, useEffect } from 'react';

const tracing = [  {
  A: [[100, 100], [200, 100], [200, 200], [150, 250], [100, 200], [100, 100], [200, 200]],
  B: [[100, 100], [200, 100], [200, 175], [100, 175], [200, 175], [200, 250], [100, 250], [100, 175]],
  C: [[200, 100], [100, 100], [100, 250], [200, 250]],
  D: [[100, 100], [200, 100], [200, 250], [100, 250], [100, 100]],
  E: [[200, 100], [100, 100], [100, 175], [150, 175], [100, 175], [100, 250], [200, 250]],
  F: [[200, 100], [100, 100], [100, 175], [150, 175], [100, 175]],
  G: [[200, 100], [100, 100], [100, 250], [200, 250], [200, 175], [150, 175]],
  H: [[100, 100], [100, 250], [100, 175], [200, 175], [200, 250], [200, 100]],
  I: [[150, 100], [150, 250]],
  J: [[200, 100], [200, 250], [100, 250], [100, 200]],
  K: [[100, 100], [100, 250], [200, 175], [100, 100], [200, 250]],
  L: [[100, 100], [100, 250], [200, 250]],
  M: [[100, 250], [100, 100], [150, 175], [200, 100], [200, 250]],
  N: [[100, 250], [100, 100], [200, 250], [200, 100]],
  O: [[100, 100], [200, 100], [200, 250], [100, 250], [100, 100]],
  P: [[100, 100], [100, 250], [200, 250], [200, 175], [100, 175]],
  Q: [[100, 100], [200, 100], [200, 250], [100, 250], [100, 100], [150, 175], [200, 250]],
  R: [[100, 100], [100, 250], [200, 250], [200, 175], [100, 175], [200, 100]],
  S: [[200, 100], [100, 100], [100, 175], [200, 175], [200, 250], [100, 250]],
  T: [[100, 100], [200, 100], [150, 100], [150, 250]],
  U: [[100, 100], [100, 250], [200, 250], [200, 100]],
  V: [[100, 100], [150, 250], [200, 100]],
  W: [[100, 100], [100, 250], [150, 175], [200, 250], [200, 100]],
  X: [[100, 100], [200, 250], [200, 100], [100, 250]],
  Y: [[100, 100], [150, 175], [150, 250], [150, 175], [200, 100]],
  Z: [[100, 100], [200, 100], [100, 250], [200, 250]],

    a: [[150, 200], [100, 250], [100, 350], [200, 350], [200, 250], [150, 200]],
    b: [[100, 100], [100, 350], [200, 350], [200, 250], [150, 200], [100, 250], [100, 100]],
    c: [[200, 200], [100, 200], [100, 300], [200, 300]],
    d: [[200, 100], [200, 350], [100, 350], [100, 250], [150, 200], [200, 250], [200, 100]],
    e: [[200, 200], [100, 200], [100, 350], [200, 350], [100, 250], [200, 250]],
    f: [[100, 200], [100, 350], [200, 350], [100, 250]],
    g: [[200, 200], [100, 200], [100, 350], [200, 350], [200, 250], [150, 250], [150, 300]],
    h: [[100, 100], [100, 350], [100, 250], [200, 250], [200, 350], [200, 100]],
    i: [[150, 100], [150, 350], [150, 200]],
    j: [[200, 100], [200, 350], [100, 350], [100, 300]],
    k: [[100, 100], [100, 350], [200, 250], [100, 100], [200, 350]],
    l: [[100, 100], [100, 350], [200, 350]],
    m: [[100, 350], [100, 100], [150, 250], [200, 100], [200, 350]],
    n: [[100, 350], [100, 100], [200, 350], [200, 100]],
    o: [[100, 200], [100, 350], [200, 350], [200, 200], [100, 200]],
    p: [[100, 200], [100, 350], [200, 350], [200, 250], [100, 250]],
    q: [[100, 200], [100, 350], [200, 350], [200, 200], [100, 200], [150, 250], [200, 350]],
    r: [[100, 200], [100, 350], [200, 350], [200, 250], [100, 250], [200, 200]],
    s: [[200, 200], [100, 200], [100, 250], [200, 250], [200, 350], [100, 350]],
    t: [[100, 200], [200, 200], [150, 200], [150, 350]],
    u: [[100, 350], [100, 200], [200, 200], [200, 350]],
    v: [[100, 200], [150, 350], [200, 200]],
    w: [[100, 200], [100, 350], [150, 275], [200, 350], [200, 200]],
    x: [[100, 200], [200, 350], [200, 200], [100, 350]],
    y: [[100, 200], [150, 275], [150, 350], [150, 275], [200, 200]],
    z: [[100, 200], [200, 200], [100, 350], [200, 350]],

    1: [[150, 100], [150, 350]],
    2: [[100, 200], [200, 200], [200, 250], [100, 350], [200, 350]],
    3: [[100, 200], [200, 200], [150, 250], [200, 250], [100, 350]],
    4: [[100, 250], [100, 200], [200, 200], [200, 250], [200, 350]],
    5: [[200, 200], [100, 200], [100, 250], [200, 250], [200, 350], [100, 350]],
    6: [[200, 200], [100, 200], [100, 350], [200, 350], [200, 250], [100, 250]],
    7: [[100, 200], [200, 200], [150, 350]],
    8: [[100, 200], [200, 200], [200, 250], [100, 250], [100, 200], [100, 350], [200, 350], [200, 200]],
    9: [[200, 350], [200, 200], [100, 200], [100, 250], [200, 250], [200, 200]],
    10: [[100, 200], [200, 200], [200, 250], [100, 250], [100, 200], [100, 350], [200, 350], [200, 250], [100, 250]],
  },
];


const TraceGame = () => {
  const canvasRef = useRef(null);
  const [initialTracing, setInitialTracing] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
  }, []);

  const handleStart = (event) => {
    event.preventDefault();
    if (event.touches) {
      event = event.touches[0];
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { left, top } = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(event.clientX - left, event.clientY - top);
    setIsDrawing(true);
  };

  const handleMove = (event) => {
    event.preventDefault();
    if (!isDrawing) {
      return;
    }
    if (event.touches) {
      event = event.touches[0];
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { left, top } = canvas.getBoundingClientRect();
    ctx.lineTo(event.clientX - left, event.clientY - top);
    ctx.stroke();
  };

  const handleEnd = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setIsDrawing(false);
    const { left, top } = canvas.getBoundingClientRect();
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    let totalPixels = 0;
    let filledPixels = 0;
    for (let i = 0; i < pixelData.length; i += 4) {
      const alpha = pixelData[i + 3];
      if (alpha > 0) {
        filledPixels++;
      }
      totalPixels++;
    }
    const fillPercentage = (filledPixels / totalPixels) * 100;
    if (fillPercentage >= 50) {
      setMessage('Great job!');
    } else {
      setMessage('Try again!');
    }
  };

  useEffect(() => {
    if (message === 'Great job!' && initialTracing) {
      setTimeout(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = initialTracing.image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }, 3000);
    }
  }, [message, initialTracing]);

  const drawDottedLine = (ctx, points) => {
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const handleSelect = (event) => {
    const selected = event.target.value;
    const randomIndex = Math.floor(Math.random() * tracing.length);
    const randomInitialTracing = tracing[randomIndex];
    if (selected === 'any') {
      const allLetters = Object.values(randomInitialTracing).flat();
      const randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
      setInitialTracing(randomLetter);
    } else {
      const filteredTracing = Object.values(randomInitialTracing)
        .flat()
        .filter((letter) => letter.type === selected);
      if (filteredTracing.length === 0) {
        const allLetters = Object.values(randomInitialTracing).flat();
        const randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        setInitialTracing(randomLetter);
      } else {
        const randomFilteredIndex = Math.floor(
          Math.random() * filteredTracing.length
        );
        const randomFilteredTracing = filteredTracing[randomFilteredIndex];
        setInitialTracing(randomFilteredTracing);
      }
    }
    setMessage('');
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (selected === 'lowercase' || selected === 'numbers') {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      if (selected === 'lowercase') {
        const lowercaseTracings = Object.values(randomInitialTracing).flat().filter((letter) => letter.type === 'lowercase');
        lowercaseTracings.forEach((tracing) => {
          drawDottedLine(ctx, tracing);
          ctx.fill();
        });
      } else if (selected === 'numbers') {
        const numberTracings = Object.values(randomInitialTracing).flat().filter((letter) => letter.type === 'numbers');
        numberTracings.forEach((tracing) => {
          drawDottedLine(ctx, tracing);
          ctx.fill();
        });
      }
    } else {
      ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
      ctx.lineWidth = 5;
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="select">Select:</label>
        <select id="select" onChange={handleSelect}>
          <option value="any">Any</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="numbers">Numbers</option>
        </select>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      ></canvas>
      <p>{message}</p>
    </div>
  );
};

export default TraceGame;



// {    type: 'number',    value: '1',    image: 'one.png',    path: 'M 50 100 L 150 100',  },  {    type: 'shape',    value: 'square',    image: 'square.png',    path: 'M 50 50 L 150 50 L 150 150 L 50 150 Z',  },  // add tracing objects here

