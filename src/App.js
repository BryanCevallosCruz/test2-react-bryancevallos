import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ConsumirApi from './componentes/ConsumirApi';
import Informacion from './componentes/Informacion';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className='App'>Gif Galery</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConsumirApi />}>

          </Route>
          <Route path="*" element={<Informacion/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
