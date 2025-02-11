import { useState } from "react";
import LoginForm from "./components/Login";
import Register from "./components/Register.jsx";

// import { Register } from "register";
import Navigations from "./components/Navigations.jsx";
import "./App.css";
import TestGetBookQuery from "./components/Books.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigations />
        <Routes>
          <Route path="/" element={<TestGetBookQuery />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
