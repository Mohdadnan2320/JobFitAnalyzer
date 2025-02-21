import { useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const UploadCard = () => {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [resume, setResume] = useState(null);
    const navigate = useNavigate();

  const onFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('resume', resume);

    if (!resume) {
      setError("No file selected");
      return;  // Exit early if no resume is selected
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message)
    } catch (error) {
      console.error('Error uploading resume:', error);
      setError(error);
    }
  };

  const onViewJobs = ()=>{
    navigate('/jobs');
  }
  return (
    <div className="w-full h-full">
      <div className="p-10">
        <h1 className="text-2xl font-medium my-5">JobFit Analyzer</h1>
        <p className="text-lg leading-6">
        Upload your resume to JobFit Analyzer and let AI find the best job matches based on your skills and preferences, unlocking exciting career opportunities{" "}
        </p>
        <div className="w-full h-96 mt-10 border-2 border-dashed ">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <IoCloudDownloadOutline className="w-1/2 h-1/2" />
            <div className="">
              <h2>
                Drop a file here,{" "}
                <span className="text-blue-600">or Browser</span>
              </h2>
              <input onChange={onFileChange}
               className="w-48 mt-2 text-sm outline-none cursor-pointer"             
               type="file"
               accept=".pdf,.docx" />
               {error && <p className="text-red-500 mt-2 w-48 text-xs">{error}</p>}
               {message && <p className="text-green-600 mt-2 w-48 text-xs">{message}</p>}
            </div>
            <button onClick={onFileUpload}
               className="mt-5 border rounded-2xl px-5 py-1 text-sm hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-100"
               >upload</button>
              {
                message ? <button onClick={onViewJobs}
                className="mt-5 border rounded-2xl px-5 py-1 text-sm hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-100"
                >View jobs</button>
                : ''
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
