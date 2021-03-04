import React, { useState } from "react";
import PopularCards from "../popular/popularCards";
import FeaturedCards from "../featured/featuredCards";
import './gallery.css';

export default function GalleryHooks() {
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = evt => {
    setSearchText(evt.target.value);
  };

  return (
    <div className="gallery-container">
      <div className="container">
        <input type="text" value={searchText} onChange={handleFilterChange} placeholder="Search for..." />
        <div className="content">
          <PopularCards searchText={searchText} />
          <div className="white-space" />
          <FeaturedCards />
        </div>
      </div>
    </div>
  );
}
