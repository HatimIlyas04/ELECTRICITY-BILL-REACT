import React from 'react';
import './Facture.css'; 

const Facture = ({ consommation }) => {
  const tariffs = [
    { range: 'Tranche 1: de 1 à 100 kWh', price: 0.8496 },
    { range: 'Tranche 2: de 101 à 150 kWh', price: 1.022 },
    { range: 'Tranche 3: de 151 à 200 kWh', price: 1.022 },
    { range: 'Tranche 4: de 201 à 300 kWh', price: 1.1119 },
    { range: 'Tranche 5: de 301 à 500 kWh', price: 1.3157 },
    { range: 'Tranche 6: de 501 à la consommation totale', price: 1.5193 }
  ];

  let totalCost = 0;
  for (const tariff of tariffs) {
    if (consommation <= 0) break; 

    if (consommation <= 100) {
      totalCost += consommation * tariff.price;
      break; 
    } else {
      totalCost += 100 * tariff.price; 
      consommation -= 100; 
    }
  }

  const tva = totalCost * 0.2;

  const totalCostWithTva = totalCost + tva;

  return (
    <div className="facture-container">
      <h2 className="facture-header">Facture d'électricité</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tranche</th>
              <th>Tarif en DH HT</th>
            </tr>
          </thead>
          <tbody>
            {tariffs.map((tranche, index) => (
              <tr key={index}>
                <td>{tranche.range}</td>
                <td>{tranche.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-section">
        <p>Consommation: {consommation} kWh</p>
        <p>Coût total HT: {totalCost.toFixed(2)} DH</p>
        <p>TVA (20%): {tva.toFixed(2)} DH</p>
        <p><strong>Coût total TTC: {totalCostWithTva.toFixed(2)} DH</strong></p>
      </div>
    </div>
  );
};

export default Facture;
