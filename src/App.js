import { Route, Routes } from "react-router";
import Header from "./header/header";
import Login from "./pages/login";
import Loop from "./pages/loop";
import Signup from "./pages/signup/SignUp";
import List from "./pages/list";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/header" element={<Header />} />
        <Route path="/loop" element={<Loop />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}
export default App;
