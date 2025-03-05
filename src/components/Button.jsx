import React from "react";

const Button = ({ handlePhrase }) => {
  const playSound = () => {
    const audio = new Audio("/sounds/crunch.mp3");
    audio.play();
  };

  const handleClick = () => {
    playSound(); // Reproducir sonido
    handlePhrase(); // Cambiar frase e imagen
  };

  return (
    <button onClick={handleClick} className="btn">
      Probar mi suerte
    </button>
  );
};

export default Button;