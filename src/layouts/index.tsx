import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white dark:(bg-black text-white)">
      <div className="w-full max-w-7xl lg:px-8">
        <div className="flex flex-col min-h-screen bg-white ring-1 ring-zinc-100 dark:(bg-zinc-900 ring-zinc-300/20)">
          <Header />
          <main>
            <div className="w-full p-4 lg:p-16">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
