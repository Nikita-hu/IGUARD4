import React, { useState } from 'react';
import Chart from '../Components/Chart';
import { Button } from 'theme-ui';


const ChartsPage = () => {
  const [numbersOne, setNumbersOne] = useState(false);
  const [numbersTwo, setNumbersTwo] = useState(false);
  const [numbersThree, setNumbersThree] = useState(false);

  const generatorRandom = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 31))
  }

  const generator = () => {

    setNumbersOne(generatorRandom());
    setNumbersTwo(generatorRandom());
    setNumbersThree(generatorRandom());

  };
  return (
    <div>
      <Button className='chart' onClick={generator}>Обновить данные</Button>
      <Chart numbersOne={numbersOne} numbersTwo={numbersTwo} numbersThree={numbersThree} />
    </div>
  )
}
export default ChartsPage