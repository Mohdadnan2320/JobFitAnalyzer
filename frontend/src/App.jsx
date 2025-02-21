import { Route, Routes } from "react-router-dom";
import UploadCard from "./components/UploadCard";
import ListOfJobs from "./components/ListOfJobs";
const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<UploadCard />} />    
    <Route path="/jobs" element={<ListOfJobs />} />    
    </Routes>
    </>
  );
}

export default App;
