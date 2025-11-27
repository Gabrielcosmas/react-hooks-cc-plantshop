<<<<<<< HEAD
import React from 'react';
import PlantCard from './PlantCard';

const PlantList = () => {
  // Sample plant data
  const plants = [
    {
      id: 1,
      name: 'Aloe Vera',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
      description: 'A succulent plant known for its medicinal properties.',
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      image: 'https://images.unsplash.com/photo-1597582007752-5a3d04b9b6f3',
      description: 'A tropical plant with large, split leaves.',
    },
    {
      id: 3,
      name: 'Snake Plant',
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2',
      description: 'An easy-to-care-for indoor plant that purifies air.',
    },
  ];

  return (
    <div style={styles.list}>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          description={plant.description}
        />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default PlantList;
=======
import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
>>>>>>> origin/master
