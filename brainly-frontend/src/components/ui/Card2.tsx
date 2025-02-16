import React from "react";
import "./Card2.css"


interface Card2Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Card2: React.FC<Card2Props> = ({ title, description, icon }) => {
  return (
    <div className="card2">
      <div className="card2-icon">{icon}</div>
      <div className="card2-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};