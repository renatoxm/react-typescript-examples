import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return <Button onClick={updateCount}>Count is: {count}</Button>;
};

export default Counter;
