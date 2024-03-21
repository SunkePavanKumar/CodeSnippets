import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const [language, setLanguage] = useState("C++");
  const [stdin, setStdin] = useState("");
  const [code, setCode] = useState("");
  const username = localStorage.getItem("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!language && !stdin && !username && !code) {
      return toast.error("Please provide all the inputs");
    }
    const endpoint = `${import.meta.env.VITE_BACKEND_URI}/snippet`;
    const response = await axios.post(endpoint, {
      username,
      language,
      stdin,
      code,
    });
    if (response.data.success) {
      setCode("");
      setStdin("");
      return toast.success("Hurray! Submitted the snippet...");
    } else {
      return toast.error("something went wrong");
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto mt-5 mb-5"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={username}
            readOnly
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="language"
          >
            Preferred Language
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stdin"
          >
            Standard Input
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stdin"
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="code"
          >
            Source Code
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
