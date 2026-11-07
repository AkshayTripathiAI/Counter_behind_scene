import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import RenderLog from './components/RenderLog.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
ReactDOM.createRoot(document.getElementById('render-log-root')).render(
  <RenderLog />
);
