import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
   <>
   <div>
    <Toaster 
     position="top-right"
     toastOptions={{
      success :{
        iconTheme : {
          primary : "indigo",
        }
      }
    }}></Toaster>
   </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
