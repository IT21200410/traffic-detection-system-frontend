import React from 'react';
import '../styles/Card.css';

function Card() {
  return (
    <div className="cards">
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
