import React, { useState, useEffect } from "react";
import { PropTypes } from 'prop-types';
import { getCarousel } from "../../api/galleryApi";
import Card from '../cards/card';
import './popularCards.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function PopularCards(props) {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        async function fetchApis() {
            const { data } = await getCarousel();
            setCards(data);
            setFilteredCards(data);
            setIsLoading(false);
        }

        fetchApis();
    }, []);

    useEffect(() => {
        setFilteredCards(cards.filter(c => props.searchText === '' || c.title.includes(props.searchText)))
    }, [props, cards]);

    return (
        <>
            <div className="content-title">Popular around you</div>
            {isLoading && <div>Fetching data...</div>}
            {!isLoading &&
                <>
                    {filteredCards.length === 0 && <div>no matching popular card was found.</div>}
                    <div>
                        <Carousel responsive={responsive}>
                            {filteredCards.map((c, index) => (
                                <Card key={index} card={c} />
                            ))}
                        </Carousel>
                    </div>
                </>
            }
        </>
    )
};

PopularCards.propTypes = {
    searchText: PropTypes.string
};

export default PopularCards;
