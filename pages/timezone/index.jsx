import React, { useEffect, useState } from 'react';
import MenuBottom from '../../components/menuBottom';
import Loading from '../../components/loadingRainbow';

import styles from '../../styles/Timezone.module.css';

export default function Timezone() {
  const [oslo, setOslo] = useState(false);
  const [br, setBr] = useState(false);
  const [text, setText] = useState(false);
  const [isLoading, setLoading] = useState(false);

  
    useEffect(() => {
      setLoading(true);
      fetch('https://worldtimeapi.org/api/timezone/Europe/Oslo')
        .then((res) => res.json())
        .then((data) => {
          const hour = () => {
            return data.datetime.slice(11, 16);
          };
          setOslo(hour());
          setLoading(false);
        })

        .catch((error) => {
          console.log(error);
        });
    }, ['']);

    useEffect(() => {
      setLoading(true);
      fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo')
        .then((res) => res.json())
        .then((data) => {
          const hour = () => {
            return data.datetime.slice(11, 16);
          };
          setBr(hour());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, ['']);
  
    const handleClick = () => {
        return <h1 className={styles.hour}>{br} - {oslo}</h1>  
    };
    

  return (
    <>
      <div>
        <MenuBottom />
      </div>
      {isLoading ? <Loading /> : handleClick()}
    </>
  );
}
