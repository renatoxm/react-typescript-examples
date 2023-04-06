const Footer = () => {
  return (
    <>
      <footer className="mt-auto border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
        <section className="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20">
          <div className="w-full py-4 text-center md:text-left">
            <div className="mb-1">React Typescript Examples</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Copyright © 2023{' '}
              <a href="https://www.renato.digital/">Renato Nabinger</a>. All
              rights reserved. Made with <span className="text-red-500">❤</span>
              <div className="flex flex-col md:flex-row space-x-2 items-center md:float-right">
                <span className="text-center md:text-right">
                  designed by <a href="https://github.com/renatoxm">renatoxm</a>
                </span>
                <span className="block bg-blue-500 rounded px-1 py-0.5 text-white text-xs">
                  v 1.0.0
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
