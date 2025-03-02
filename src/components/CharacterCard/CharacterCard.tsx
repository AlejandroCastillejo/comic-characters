import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  id: number | string;
  name: string;
  imageUrl: string;
}
function CharacterCard(props: CharacterCardProps) {
  const { id, name, imageUrl } = props;

  //TODO: review height
  return (
    <Link className={styles.characterCardContainer} href={`/details/${id}`}>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt={`${name}_image`}
          width={172.5}
          height={0}
          style={{
            height: 'auto',
            objectFit: 'contain',
            aspectRatio: 1,
          }}
        />
      </div>
      <div className={styles.middleBar} />
      <div className={styles.bottomContainer}>
        <p className={styles.name}>{name}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
