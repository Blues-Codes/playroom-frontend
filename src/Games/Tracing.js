import React, { useState, useRef, useEffect } from 'react';

const letters = [  {
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

}








// {    type: 'number',    value: '1',    image: 'one.png',    path: 'M 50 100 L 150 100',  },  {    type: 'shape',    value: 'square',    image: 'square.png',    path: 'M 50 50 L 150 50 L 150 150 L 50 150 Z',  },  // add tracing objects here
];

const TraceGame = () => {
  const canvasRef = useRef(null);
  const [tracing, setTracing] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
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
    const percentageFilled = filledPixels / totalPixels;
    if (percentageFilled >= 0.8) {
      setMessage('Great job!');
    } else {
      setMessage('Try again!');
    }
  };
  
  useEffect(() => {
    if (message === 'Great job!' && tracing) {
      setTimeout(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = tracing.image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }, 3000);
    }
  }, [message, tracing]);

  const handleSelect = (event) => {
    const selected = event.target.value;
    const randomIndex = Math.floor(Math.random() * tracings.length);
    const randomTracing = tracings[randomIndex];
    if (selected === 'any') {
      setTracing(randomTracing);
    } else {
      const filteredTracings = tracings.filter(
        (tracing) => tracing.type === selected
      );
      if (filteredTracings.length === 0) {
        setTracing(randomTracing);
      } else {
        const randomFilteredIndex = Math.floor(
          Math.random * filteredTracings.length
        );
        const randomFilteredTracing = filteredTracings[randomFilteredIndex];
        setTracing(randomFilteredTracing);
      }
    }
    setMessage('');
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
      
      export default TraceGame;
