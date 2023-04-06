import { createContext, useContext } from 'react';

const NameContext = createContext('');

function Body() {
  return <Greeting />;
}

function Greeting() {
  const name = useContext(NameContext);

  return <h3>Welcome, {name}</h3>;
}

const Context = () => {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    </NameContext.Provider>
  );
};

export default Context;
