import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './componentes/navbar/NavBar';
import ItemList from './componentes/ItemList';

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path='/' element={<ItemList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
