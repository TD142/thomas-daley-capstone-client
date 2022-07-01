import HomePage from "./components/pages/home-page/HomePage";
import AboutPage from "./components/pages/about-page/AboutPage";
import Footer from "./components/footer/Footer";
import "./App.scss";
import "../src/styles/global.scss";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
