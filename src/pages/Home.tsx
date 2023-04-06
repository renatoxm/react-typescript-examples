import Layout from '../layouts';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className="prose max-w-none">
        <h1 className="pb-4">Welcome to React + TS Examples</h1>A collection of
        Typescript React.js implementations, Patterns, Algorithms and Data
        Structures
        <h2>Index</h2>
        <ul>
          <li>
            <Link to="/hooks">React Hooks Examples</Link>
          </li>
          <li>
            <a
              href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#useref"
              target="_blank"
              rel="noreferrer"
            >
              React Typescript Cheat Sheet
            </a>
          </li>
        </ul>
        <h2>Some Helpfull stuff</h2>
        <ul>
          <li>
            <a
              href="https://www.freecodecamp.org/news/the-react-cheatsheet"
              target="_blank"
              rel="noreferrer"
            >
              The React Cheat Sheet
            </a>
          </li>
          <li>
            <a
              href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#useref"
              target="_blank"
              rel="noreferrer"
            >
              React Typescript Cheat Sheet
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
