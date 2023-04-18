import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/home/Header";
import AuthContextProvider from "./context/AuthContextProvider";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Account from "./components/account";
import AddCourse from "./components/course/AddCourse";

function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/add-course" element={<AddCourse />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
