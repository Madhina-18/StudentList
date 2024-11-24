import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentProvider } from "./Context/StudentContext";
import StudentDetails from "./Components/StudentDetails";
import FavouriteStudent from "./Components/FavouriteStudent";

function App() {  
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetails />} />         
          <Route path="/fav" element={<FavouriteStudent />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;