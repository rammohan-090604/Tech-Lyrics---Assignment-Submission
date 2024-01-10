import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home  from "./components/Home";
import About from './components/About';
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<Blog />} />
            <Route path="/" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
