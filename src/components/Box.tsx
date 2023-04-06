import React from 'react';

type ComponentProps = {
  children?: React.ReactNode;
};

const Box = ({ children }: ComponentProps) => {
  return (
    <div className="p-4 max-w-md m-4 outline outline-cyan-400 outline-4">
      {children}
    </div>
  );
};

export default Box;
