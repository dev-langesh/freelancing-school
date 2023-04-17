import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/home/Header";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
