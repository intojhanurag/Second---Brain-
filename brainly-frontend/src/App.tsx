import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/dashboard";
import { HomePage } from "./pages/HomePage";
import { Header } from "./pages/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(){
  return <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    
  </BrowserRouter>

}

export default App