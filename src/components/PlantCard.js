<<<<<<< HEAD
import React from 'react';

const PlantCard = ({ name, image, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    margin: '12px 0 8px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
};

export default PlantCard;
=======
import React from "react";

function PlantCard() {
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
>>>>>>> origin/master
