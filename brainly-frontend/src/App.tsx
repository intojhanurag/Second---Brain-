import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/dashboard";
import { HomePage } from "./pages/HomePage";
import { Header } from "./pages/Header";
import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom";
import { Footer } from "./pages/Footer";

function App(){
  const location=useLocation();
  const showHeader=location.pathname==="/"||location.pathname==="/signup"||location.pathname==="/signin";
  return (
      <div>
        {showHeader && <Header/>}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        {showHeader && <Footer/>}
      </div>
  );
}
function AppWrapper(){
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}


export default AppWrapper