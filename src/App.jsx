import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import Sale from "./Pages/Sale";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>

        <Routes>
          < Route path="/" element={<Home />} />
          < Route path="/Admin" element={<Admin />} />
          < Route path="/Sale" element={<Sale />} />
        </Routes>

      </BrowserRouter>
    </main>
  )
}
