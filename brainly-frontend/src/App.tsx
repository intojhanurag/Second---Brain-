import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/dashboard";

import { BrowserRouter,Routes,Route, useLocation } from "react-router-dom";


import { BackgroundLinesDemo } from "./pages/HomePage";

function App(){

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