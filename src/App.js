import React, { useState } from 'react';
import InformationsConsommation from './COMPONENT/InformationsConsommation ';
import Facture from './COMPONENT/Facture';
import './App.css'; 


const App = () => {
  const [consommation, setConsommation] = useState(null);

  const handleValidation = (consommation) => {
    setConsommation(parseFloat(consommation)); 
  };

  return (
    <div>
      <h1>Calcul de la facture d'électricité</h1>
      <InformationsConsommation onValidation={handleValidation} />
      {consommation !== null && !isNaN(consommation) && ( // NT7A9O BALI CONSOMMATION MACHI NULL
        <Facture consommation={consommation} />
      )}
    </div>
  );
};

export default App;
