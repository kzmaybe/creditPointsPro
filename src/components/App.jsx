import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import cards from "../cardInfo.js";

function App() {
  return (
    <div>
      <Header />
      {/* Subtitle */}
      <h1 className="wallet-title">My Wallet</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            image={card.image}
            description={card.description}
            referralLink={card.referralLink}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
