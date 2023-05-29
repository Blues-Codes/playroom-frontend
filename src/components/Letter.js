import React from 'react';
import { useHistory } from 'react-router-dom';
const Letter = ({ letter, image, associatedImage, sound }) => {
    const history = useHistory();

  const handleClick = () => {
    history.push(`/letter/${letter}`)
    console.log(`Clicked on letter: ${letter}`);
    // You can perform any desired action or update state here
  };

  return (
    <div className="letter" onClick={handleClick}>
      <div>{letter}</div>
      <img src={image} alt={letter} />
      <img src={associatedImage} alt={`Associated ${letter}`} />
      <audio src={sound} />
    </div>
  );
};

export default Letter;
