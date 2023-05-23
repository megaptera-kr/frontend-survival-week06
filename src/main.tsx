import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import App from './App';
import worker from './mocks/worker';

function main() {
  // if (process.env.NODE_ENV === 'development') {
  //   worker.start();
  // }

  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

main();
