import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Test.css';

function App() {
  const [count, setCount] = useState(0);

  function MyButton() {
    return <button>I'm a button</button>;
  }

  const MyButton2 = () => {
    return <button>I'm a button2</button>;
  };

  return (
    <>
      <div>
        <MyButton />
        <MyButton2 />
        <img
          className="avatar"
          src="https://image.msscdn.net/thumbnails/images/prd_img/20240806/4298658/detail_4298658_17254282117044_big.png?w=1200"
        />

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
