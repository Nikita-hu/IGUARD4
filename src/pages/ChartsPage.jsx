import React, { useState, useEffect } from 'react';
import Chart from '../Components/Chart';
import { Tooltip } from '@mui/material';
import { PinkSwitch } from '../hook/useStyle'
import { SliderUpDate } from '../Components/SliderUpDate';
const ChartsPage = () => {
  const [numbersOne, setNumbersOne] = useState([]); 
  const [numbersTwo, setNumbersTwo] = useState([]); 
  const [numbersThree, setNumbersThree] = useState([]); 
  const [showLegend, setShowLegend] = useState(true);
  const [activeUpDate, setActiveUpDate] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (activeUpDate) {
      generator();
      const id = setInterval(generator, 10000); 
      setIntervalId(id); 

      return () => clearInterval(id);
    } else {
      clearInterval(intervalId);
    }
  }, [activeUpDate]);

  const generatorRandom = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 31));
  };

  const generator = () => {
    setNumbersOne(generatorRandom());
    setNumbersTwo(generatorRandom());
    setNumbersThree(generatorRandom());
  };

  const tooltip = showLegend ? "Скрыть легенду" : "Показать легенду";
  const toggleLegend = () => {
    setShowLegend(prev => !prev);
  };

  const handleClick = (type) => {
    setActiveUpDate(type);
    console.log(type);
  };

  return (
    <div>
      <SliderUpDate 
        activeUpDate={activeUpDate} 
        setActiveUpDate={setActiveUpDate} 
        disabled={activeUpDate} 
        handleClick={handleClick} 
      />
      <Tooltip title={tooltip}>
        <PinkSwitch onClick={toggleLegend} defaultChecked />
      </Tooltip>
      <Chart 
        numbersOne={numbersOne} 
        numbersTwo={numbersTwo} 
        numbersThree={numbersThree} 
        showLegend={showLegend} 
      />
    </div>
  );
};

export default ChartsPage;