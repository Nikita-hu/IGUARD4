import React, { useState, useEffect } from 'react';
import Chart from '../Components/Chart';
import { Button } from 'theme-ui';
import { Tooltip } from '@mui/material';
import { PinkSwitch } from '../hook/useStyle'

const ChartsPage = () => {
  const [numbersOne, setNumbersOne] = useState(false);
  const [numbersTwo, setNumbersTwo] = useState(false);
  const [numbersThree, setNumbersThree] = useState(false);
  const [showLegend, setShowLegend] = useState(true);
  const [activeUpDate, setActiveUpDate] = useState(true);
  const [intervalId,setInterval] = useState(null)
  // useEffect(() => {
  //   if (activeUpDate) {
  //     generator(); 
  //   }

  // }, []);

  useEffect(() => {
    if (activeUpDate) {
      generator(); 
      const id = setInterval(() => {
        generator(); 
      }, 10000);
      setInterval(id); 
    }

    return () => clearInterval(intervalId); 
  }, [activeUpDate]);

  const handleButtonClick = () => {
    if (activeUpDate) {
      setActiveUpDate(false); 
    } else {
      setActiveUpDate(true);
      generator(); 
    }
  };
  const generatorRandom = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 31))
  }

  const generator = () => {
    setNumbersOne(generatorRandom());
    setNumbersTwo(generatorRandom());
    setNumbersThree(generatorRandom());
  };
  const tooltip = showLegend ? "Скрыть легенду" : "Показать легенду"
  const toggleLegend = () => {
    setShowLegend(prev => !prev);
  };
  return (
    <div>
      <Button className='chart' onClick={handleButtonClick} disabled={!activeUpDate}>Обновить данные</Button>

      <Tooltip title={tooltip}>
        <PinkSwitch onClick={toggleLegend} defaultChecked />
      </Tooltip>

      <Chart numbersOne={numbersOne} numbersTwo={numbersTwo} numbersThree={numbersThree} showLegend={showLegend} />
    </div>
  )
}
export default ChartsPage