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
  const [oneActive, setOneActive] = useState(false)
  useEffect(() => {
    generator();
    if (activeUpDate) {

      const id = setInterval(generator, 10000);
      setIntervalId(id);

      return () => clearInterval(id);
    } else {
      if (!oneActive) {
        generator();
        setOneActive(true);
      }
      if (oneActive) {
        setNumbersOne(numbersOne)
        setNumbersTwo(numbersTwo);
        setNumbersThree(numbersThree);
      }
      clearInterval(intervalId);
    }
  }, [activeUpDate, oneActive]);

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