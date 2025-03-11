import React from "react";

function Card({ name, image, description, referralLink }) {
  const handleClick = () => {
    window.open(referralLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a
          href={referralLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
          onClick={(e) => e.stopPropagation()} // Prevents the button from triggering the card click
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default Card;
