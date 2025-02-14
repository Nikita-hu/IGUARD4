import React, { useState } from 'react';
import TwoPage from '../pages/TwoPage';
import { Button } from 'theme-ui';
const Random = () => {
  const [numbers, setNumbers] = useState([]);
  const Generator = () => {
    const newNumbers = [];
    for (let i = 0; i < 7; i++) {
      const randomNumbers = Math.floor(Math.random() * 31);
      newNumbers.push(randomNumbers);
    }
    setNumbers(newNumbers);

  };
  return (
    <div>
      <Button className='chart'onClick={Generator}>Обновить данные</Button>
      <TwoPage numbers={numbers} />
    </div>
  )
}
export default Random