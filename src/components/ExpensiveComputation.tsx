import React, { useMemo } from 'react';

const expensiveFunction = (inputValue: string | number): string => {
  let expensiveValue: string | number = inputValue;
  if (typeof inputValue === 'number') {
    expensiveValue = inputValue * 42;

    // lots and lots of computing including inputValue ...
    expensiveValue = 'World';
  }
  return expensiveValue.toString();
};

type MyComponentProps = {
  something: string;
};

const ExpensiveComputation: React.FC<MyComponentProps> = ({ something }) => {
  const expensiveValue = useMemo(
    () => expensiveFunction(something),
    [something]
  );
  return <h3>Hello {expensiveValue}</h3>;
};

export default ExpensiveComputation;
