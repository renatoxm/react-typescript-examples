import { useState } from 'react';
import Layout from '../layouts';
import Posts from '../components/Posts';
import Counter from '../components/Counter';
import LoginForm from '../components/LoginForm';
import Box from '../components/Box';
import LoggedMsg from '../components/LoggedMsg';
import Codeblock from '../components/Codeblock';
import Context from '../components/Context';
import PlayerList from '../components/PlayerList';
import ExpensiveComputation from '../components/ExpensiveComputation';

const Hooks = () => {
  type User = {
    name: string;
  };
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <Layout>
      <div className="prose max-w-none">
        <h1>Hooks</h1>
        <h2>1. useState</h2>
        <p>
          useState does exactly what it says—it allows us to use stateful values
          in function components. useState is used instead of a simple variable
          because when state is updated, our component re-renders, usually to
          display that updated value. Like all hooks, we call useState at the
          top of our component and can pass it an initial value to put on its
          state variable. We use array destructuring on the value returned from
          useState to access (1) the stored state and (2) a function to update
          that state.
        </p>
        <Codeblock
          codeString="import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}"
        />
        <h3>
          <span className="text-cyan-500">Example: Counter button</span>
        </h3>
        <Counter />
        <br />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/Counter.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>

        <h2>2. useEffect hook</h2>
        <p>
          If we want to interact with the “outside world”, such as using an API,
          we use the useEffect hook. useEffect is used to perform a side effect,
          which means to perform an operation that exists outside of our app
          that doesn’t have a predictable result. The basic syntax of useEffect
          requires a function as a first argument and an array as the second
          argument.
        </p>
        <Codeblock
          codeString="import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
  // perform side effect here
  }, []);
}"
        />
        <h3>
          <span className="text-cyan-500">Example: Fetch posts from api</span>
        </h3>
        <Posts />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/Posts.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>
        <h2>3. useRef</h2>
        <p>
          useRef allows us to get direct access to a JSX element. To use useRef,
          call it, get the returned value, and put it on the ref prop for a
          given React element. Refs do not have a built-in prop on components,
          only React elements.
        </p>
        <p>
          <span className="font-bold">Extra feature:</span> In the example
          above, the LoginForm component emits the user name after login button
          is clicked
        </p>
        <Codeblock
          codeString="import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
}"
        />
        <h3>
          <span className="text-cyan-500">Example: Mocked Login Form</span>
        </h3>
        <Box>
          <LoggedMsg user={user} />
        </Box>
        <LoginForm onSubmit={(el) => setUser({ name: el })} />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/LoginForm.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>

        <h2>4. useContext</h2>
        <p>
          useContext provides an easier way of consuming context than using the
          standard Context.Consumer component. The syntax involves passing the
          entire Context object that we want to consume into useContext. The
          returned value is the value passed down to Context.
        </p>
        <Codeblock
          codeString="import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);
  // ...
}"
        />
        <h3>
          <span className="text-cyan-500">Example: Mocked Login Form</span>
        </h3>
        <Context />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/Context.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>

        <h2>5. useCallback</h2>
        <p>
          useCallback is a hook that we use to help with our app&apos;s
          performance. Specifically, it prevents functions from being recreated
          every time our component re-renders, which can hurt the performance of
          our app.
        </p>
        <Codeblock
          codeString="import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);
  // ...
}"
        />
        <h3>
          <span className="text-cyan-500">
            Example: In the example below, when we pass down a function to
            remove a player by clicking on it using handleRemovePlayer via
            props. Problem is that the function will be recreated every time.
            The way to fix this is to wrap our callback function in useCallback
            and to include its one argument player in the dependencies array
          </span>
        </h3>
        <PlayerList />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/PlayerList.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>

        <h2>6. useMemo</h2>
        <p>
          useMemo is another performance hook that allows us to ‘memoize’ a
          given operation. Memoization makes it possible to remember the result
          of expensive calculations when they have already been made so we don’t
          have to make them again. Like useEffect and useCallback, useMemo
          accepts a callback function and a dependencies array. Unlike both of
          these functions, however, useMemo is intended to return a value. You
          must return the value either explicitly with the return keyword or
          implicitly but using the arrow function shorthand.
        </p>
        <p>
          <span className="font-bold">Important:</span> While useMemo() can
          improve the performance of the component, you have to make sure to
          profile the component with and without the hook. Only after that make
          the conclusion whether memoization worth it. When memoization is used
          inappropriately, it could harm the performance.
        </p>
        <Codeblock
          codeString="import { useMemo } from 'react';

function MyComponent() {
  useMemo(() => computation(a, b), [a, b])
  // ...
}"
        />
        <h3>
          <span className="text-cyan-500">
            Example: By using useMemo, React memoizes expensive calculations.
          </span>
        </h3>
        <ExpensiveComputation something="this is a expensive calculation" />
        <a
          href="https://github.com/renatoxm/react-typescript-examples/blob/main/src/components/ExpensiveComputation.tsx"
          target="_blank"
          rel="noreferrer"
        >
          [ view code ]
        </a>
      </div>
    </Layout>
  );
};

export default Hooks;
