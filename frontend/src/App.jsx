import { Route, Routes } from "react-router-dom";
import UploadCard from "./components/UploadCard";
import JobList from "./components/jobList";

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<UploadCard />} />    
    <Route path="/jobs" element={<JobList />} />    
    </Routes>
    </>
  );
}

export default App;
