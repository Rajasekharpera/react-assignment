import React, { useState } from 'react';
import Card from './Card';
const Section = ({ title, cards }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  const visibleCards = showAllCards ? cards : cards.slice(0, 3);

  return (
    <div className="section">
      <h2>{title}</h2>
      {visibleCards.map(card => (
        <Card key={card.id} {...card} />
      ))}
      {!showAllCards && (
        <button className="see-more-button" onClick={() => setShowAllCards(true)}>
          See More
        </button>
      )}
    </div>
  );
};

export default Section;
