import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Users';
import PublicAndPrivateRoutes from './components/PublicAndPrivateRoutes';

function App({children}) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

export default App;
