import React, { useState } from 'react';
import Chart from '../Components/Chart';
import { Button } from 'theme-ui';
import Header from './Header'
const TwoPage = () => {
  const [numbersOne, setNumbersOne] = useState([]);
  const [numbersTwo, setNumbersTwo] = useState([]);
  const [numbersThree, setNumbersThree] = useState([]);

  const generator = () => {
    const newNumbersOne = [];
    const newNumbersTwo = [];
    const newNumbersThree = []; 

    for (let i = 0; i < 7; i++) {
      const randomNumbersOne = Math.floor(Math.random() * 31);
      newNumbersOne.push(randomNumbersOne);
    }
    setNumbersOne(newNumbersOne);

    for (let i = 0; i < 7; i++) {
      const randomNumbersTwo = Math.floor(Math.random() * 31)
      newNumbersTwo.push(randomNumbersTwo);
    }
    setNumbersTwo(newNumbersTwo)

    for (let i = 0; i < 7; i++) {
      const randomNumbersThree = Math.floor(Math.random() * 31)
      newNumbersThree.push(randomNumbersThree);
    }
    setNumbersThree(newNumbersThree)

  };
  return (
    <div>
      <Header />
      <Button className='chart' onClick={generator}>Обновить данные</Button>
      <Chart numbersOne={numbersOne} numbersTwo={numbersTwo} numbersThree={numbersThree}/>
    </div>
  )
}
export default TwoPage