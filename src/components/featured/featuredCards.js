import React, { useState, useEffect } from "react";
import { getFeatured } from "../../api/galleryApi";
import Card from '../cards/card';
import './featuredCards.css';

function FeaturedCards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchApis() {
      const { data } = await getFeatured();
      setCards(data);
      setIsLoading(false);
    }

    fetchApis();
  }, []);

  return (
    <>
      <div className="content-title">Featured</div>
      {isLoading && <div>Fetching data...</div>}
      {!isLoading &&
        <div className="featured">
          {cards.map((c, index) => (
            <div key={index}>
              <Card card={c} />
            </div>
          ))}
        </div>
      }
    </>
  )
};

export default FeaturedCards;
