
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import View from "../src/Components/View"
import Add from "./Components/Add";

function App() {



  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Add' element={<Add/>}/>
    <Route path='view' element={<View/>}></Route>
  </Routes>
 

  return (
<>
<Home/>

</>
  ) 
}

export default App;
