import './App.css';
import {HashRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
