import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import PageRender from "./customRouter/pageRender";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page/:id" element={<PageRender />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
