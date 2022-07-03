import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Letters.module.css';
import banner from '../../assets/postal.webp';

import CardLetters from '../../components/cardLetters';
import MenuBottom from '../../components/menuBottom';

export default function Letters() {
  return (
    <>
    <div>
        <MenuBottom/>
    </div>
      <div className={styles.banner}>
      <Image alt="Dog" src={banner} layout="responsive" />
      </div>
      <div className={ styles.pageLetters}>
        <CardLetters/>
      </div>
    </>
  );
}
