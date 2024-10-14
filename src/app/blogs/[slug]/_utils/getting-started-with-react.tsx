const GettingStartedWithReact = () => {
  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Getting Started With React</h1>
      <p className="text-lg text-gray-900 mb-6">
        React is a popular JavaScript library for building user interfaces. It
        allows you to create reusable UI components and manage the state of your
        application efficiently. In this guide, we&apos;ll cover the basics of
        getting started with React.
      </p>
      <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">1. Set up your development environment</h2>
      <p className="text-lg text-gray-900 mb-6">
        To start developing with React, you&apos;ll need Node.js and npm (Node
        Package Manager) installed on your computer. Once you have these, you
        can create a new React project using Create React App:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>npx create-react-app my-react-app cd my-react-app npm start</code>
      </pre>
      <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">2. Understanding components</h2>
      <p className="text-lg text-gray-900 mb-6">
        React applications are built using components. A component is a reusable
        piece of UI that can contain its own logic and styling. Here&apos;s a simple
        example of a functional component:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</code>
      </pre>
      <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">3. Using JSX</h2>
      <p className="text-lg text-gray-900 mb-6">
        JSX is a syntax extension for JavaScript that allows you to write
        HTML-like code in your JavaScript files. It makes it easier to describe
        what the UI should look like:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>{`const element = <h1>Welcome to React!</h1>;`}</code>
      </pre>
      <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">4. Managing state with hooks</h2>
      <p className="text-lg text-gray-900 mb-6">
        Hooks are functions that let you use state and other React features in
        functional components. The most common hook is useState:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6">
        <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
      </pre>
      <p className="text-lg text-gray-900 mb-6">
        This is just the beginning of what you can do with React. As you
        continue learning, you&apos;ll discover more advanced concepts like
        useEffect, context, and how to manage complex application state.
      </p>
    </div>
  );
};

export default GettingStartedWithReact;
