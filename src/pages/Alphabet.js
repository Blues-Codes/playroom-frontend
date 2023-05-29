import React, { useState } from 'react';
import Letter from './Letter';
import { useHistory } from 'react-router-dom';

const lettersData = [
  { letter: 'A', picture: 'a_picture.jpg', sound: 'a_sound.mp3', associatedPicture: 'a_associated_picture.jpg' },
  { letter: 'B', picture: 'b_picture.jpg', sound: 'b_sound.mp3', associatedPicture: 'b_associated_picture.jpg' },
  // Add more letters...
];

const Alphabet = () => {
  const history = useHistory();
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const handleNextLetter = () => {
    // Implement logic to navigate to the next letter based on the selectedLetter state
    // You can find the index of the selected letter in the lettersData array and update the selectedLetter state to the next index
  };

  const handleRandomLetter = () => {
    // Implement logic to navigate to a random letter based on the lettersData array
    // Generate a random index and set the selectedLetter state to the corresponding letter
  };

  if (selectedLetter) {
    const { letter, picture, sound, associatedPicture } = lettersData.find(
      (item) => item.letter === selectedLetter
    );

    return (
      <div className="letter-page">
        <div>{letter}</div>
        <img src={picture} alt={letter} />
        <img src={associatedPicture} alt={`Associated ${letter}`} />
        <audio src={sound} />
        <button onClick={handleNextLetter}>Next</button>
        <button onClick={handleRandomLetter}>Random</button>
      </div>
    );
  }

  return (
    <div className="alphabet">
      {lettersData.map(({ letter, picture, sound }) => (
        <Letter
          key={letter}
          letter={letter}
          picture={picture}
          sound={sound}
          onClick={() => handleLetterClick(letter)}
        />
      ))}
    </div>
  );
};

export default Alphabet;
