import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Navbar from "./components/layouts/Navbar";
import { React } from "react";
import Footer from "./components/layouts/Footer";
import {GithubProvider} from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layouts/Alert";
import User from "./components/pages/User";


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github Finder" />
        <main className="container mx-auto pb-12 px-3">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/notFound"  element={<NotFound/>}/>
            <Route path="/*"  element={<NotFound/>}/>
            <Route path="/user/:login" element={<User/>}/>
            
            </Routes>
        </main>

        <Footer></Footer>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
