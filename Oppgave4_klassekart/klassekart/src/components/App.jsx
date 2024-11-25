import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kart from './kart';
import NoPage from './noPage';
import Student from './student'; 
import Class from './class';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kart />} />
        <Route path="class/:id" element={<Class />} />
        <Route path="student/:id" element={<Student />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
