import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
