import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompraAuto from './pages/CompraAuto';
import VendeAuto from './pages/VendeAuto';
import Nosotros from './pages/Nosotros';
import Ingresar from './pages/Ingresar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CompraAuto" element={<CompraAuto />} />
                <Route path="/vendeAuto" element={<VendeAuto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/ingresar" element={<Ingresar />} />
            </Routes>
        </Router>
    );
}

export default App;
