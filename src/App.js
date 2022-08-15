import "./App.css";
import Layout from "./components/Layout";
import Header from "./pages/Header";
import Body from "./pages/Body";
import About from "./pages/About";
import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
