import React, { useState } from 'react';
import './InformationsConsommation.css'; 

const InformationsConsommation = ({ onValidation }) => {
  const [consommation, setConsommation] = useState('');

  const handleValidation = () => {
    if (!isNaN(consommation) && parseFloat(consommation) > 0) {
      onValidation(parseFloat(consommation));
    } else {
      alert('Veuillez saisir une consommation valide.');
    }
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        placeholder="Entrez la consommation en kWh"
        value={consommation}
        onChange={(e) => setConsommation(e.target.value)}
      />
      <button className="validation-button" onClick={handleValidation}>Valider</button>
    </div>
  );
};

export default InformationsConsommation;
