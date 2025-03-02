import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

import styles from './CharactersGrid.module.scss';

interface CharactersGridProps {
  data: any[];
}

function CharactersGrid({ data }: CharactersGridProps) {
  return (
    <div className={styles.charactersGridContainer}>
      {data
        ? data.map((itemData) => (
            <CharacterCard
              key={itemData.id}
              id={itemData.id}
              name={itemData.name}
              imageUrl={itemData.image}
            />
          ))
        : null}
    </div>
  );
}

export default CharactersGrid;
