import { useState } from 'react';
import { Transition } from '@headlessui/react';
import reactLogo from '../assets/react.svg';
import tsLogo from '../assets/typescript.svg';
import { NavLink } from 'react-router-dom';

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-1 items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <img
                  src={reactLogo}
                  className="logo react"
                  alt="React logo"
                  width="40px"
                />
                &nbsp;+&nbsp;
                <img
                  src={tsLogo}
                  className="logo"
                  alt="Typescript logo"
                  width="40px"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  &nbsp; Examples
                </span>
              </NavLink>
            </div>
            <div className="hidden flex-1 md:block">
              <div className="ml-10 flex items-baseline space-x-4 justify-end">
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                  style={({ isActive }) =>
                    isActive ? { color: 'cyan' } : { color: 'white' }
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/hooks"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={({ isActive }) =>
                    isActive ? { color: 'cyan' } : { color: 'white' }
                  }
                >
                  Hooks
                </NavLink>

                <NavLink
                  to="/forms"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={({ isActive }) =>
                    isActive ? { color: 'cyan' } : { color: 'white' }
                  }
                >
                  Forms
                </NavLink>

                <NavLink
                  to="/advanced"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={({ isActive }) =>
                    isActive ? { color: 'cyan' } : { color: 'white' }
                  }
                >
                  Advanced
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 md:dark:bg-transparent"
                style={({ isActive }) =>
                  isActive ? { color: 'cyan' } : { color: 'white' }
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/hooks"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive ? { color: 'cyan' } : { color: 'white' }
                }
              >
                Hooks
              </NavLink>

              <NavLink
                to="/forms"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive ? { color: 'cyan' } : { color: 'white' }
                }
              >
                Forms
              </NavLink>

              <NavLink
                to="/advanced"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) =>
                  isActive ? { color: 'cyan' } : { color: 'white' }
                }
              >
                Advanced
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Nav;
