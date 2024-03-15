export default function App({name}) {
    return (
        <h1 className="greeting">{`Hello,{name} this is a JSX Code!`}</h1>
    );
  }


//without JSX
import { createElement } from 'react';

export default function App() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}