import React, { useState } from 'react';
import Chart from '../Components/Chart';
import { Button } from 'theme-ui';
import { Tooltip } from '@mui/material';
import { PinkSwitch } from '../hook/useStyle'

const ChartsPage = () => {
  const [numbersOne, setNumbersOne] = useState(false);
  const [numbersTwo, setNumbersTwo] = useState(false);
  const [numbersThree, setNumbersThree] = useState(false);
  const [showLegend, setShowLegend] = useState(true);

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
      <Button className='chart' onClick={generator}>Обновить данные</Button>

      <Tooltip title={tooltip}>
        <PinkSwitch onClick={toggleLegend} defaultChecked />
      </Tooltip>

      <Chart numbersOne={numbersOne} numbersTwo={numbersTwo} numbersThree={numbersThree} showLegend={showLegend} />
    </div>
  )
}
export default ChartsPage