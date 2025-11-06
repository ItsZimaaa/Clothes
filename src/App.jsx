import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import Sale from "./Pages/Sale";
import RootLayout from "./layout/RootLayout";

export default function App() {
  return (
    <main>
      <BrowserRouter>

        <Routes>
          <Route element={<RootLayout />}>

            < Route path="/" element={<Home />} />
            < Route path="/Sale" element={<Sale />} />
          </Route>
            < Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
