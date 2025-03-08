import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/dashboard";

import { Header } from "./pages/Header";
import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom";

import { BackgroundLines } from "./components/ui/background-lines";
import { BackgroundLinesDemo } from "./pages/HomePage";
import { HoverBorderGradientDemo } from "./components/ui/Hoverborderdemo";

function App(){
  const location=useLocation();
  const showHeader=location.pathname==="/"||location.pathname==="/signup"||location.pathname==="/signin";
  return (
      <div>
        
        <Routes>
          <Route path="/" element={<BackgroundLinesDemo/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        
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