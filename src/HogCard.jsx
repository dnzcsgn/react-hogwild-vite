import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="ui card"
      aria-label="hog card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="image">
        <img
          src={hog.image}
          alt={`Photo of ${hog.name}`}
          data-testid="hog-image"
        />
      </div>
      <div className="content">
        <h3 data-testid="hog-name">{hog.name}</h3>
      </div>

      {showDetails && (
        <div className="extra content">
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

      <div className="extra content">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHide(hog);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;
