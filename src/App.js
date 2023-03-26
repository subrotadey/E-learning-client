import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import Particle from "./components/Pages/Shared/Particle/Particle";
import router from "./components/Routes/Routes/Routes";

function App() {
  return (
    <div>
      {/* <Particle/> */}
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      
    </div>
  );
}

export default App;
