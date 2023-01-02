import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path='/single' element={<Single/>}/>
      </Routes>
    </Router>
  );
}
export default App;
