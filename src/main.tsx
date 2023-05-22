import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import App from './App';
import server from './mocks/server';

function main() {
  server.listen();

  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

main();
